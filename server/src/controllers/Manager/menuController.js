import mongoose from "mongoose";
import Menu from "../../models/menuModel.js";
import Restaurant from "../../models/restaurantModel.js";
import Category from "../../models/categoryModel.js";
import { validateStoreMenu } from "../../validations/manuValidation/storeMenuSchema.js";
import { validateUpdateMenu } from "../../validations/manuValidation/updateMenuSchema.js";

import { uploadImage } from "../../services/cloudinaryService.js";

// Fetching all menus with categories
const Menus = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Fetching menus with pagination applied to items
    const menusQuery = Menu.aggregate([
      { $unwind: "$items" },
      { $skip: skip },
      { $limit: limit },
      {
        $group: {
          _id: "$_id",
          restaurantId: { $first: "$restaurantId" },
          items: { $push: "$items" }
        }
      },
      {
        $lookup: {
          from: "restaurants",
          localField: "restaurantId",
          foreignField: "_id",
          as: "restaurantId"
        }
      },
      { $unwind: "$restaurantId" },
      {
        $project: {
          "restaurantId.name": 1,
          "restaurantId.categoryIds": 1,
          items: 1
        }
      }
    ]);

    // Fetching categories
    const categoriesQuery = Category.find().lean();

    // Fetching total count of items across all menus
    const totalCountQuery = Menu.aggregate([
      { $unwind: "$items" },
      { $count: "totalItems" }
    ]);

    // Execute all queries in parallel
    const [menus, categories, [{ totalItems } = { totalItems: 0 }]] = await Promise.all([
      menusQuery,
      categoriesQuery,
      totalCountQuery
    ]);

    // Calculate total pages
    const totalPages = Math.ceil(totalItems / limit);

    // Prepare response object
    const response = {
      menus,
      categories,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        itemsPerPage: limit
      }
    };

    // If no menus are found
    if (menus.length === 0) {
      response.message = "No menu items found for this page.";
    }

    // If no categories are found
    if (categories.length === 0) {
      response.message = response.message 
        ? response.message + " No categories found."
        : "No categories found.";
    }

    return res.status(200).json(response);

  } catch (error) {
    console.error("Error fetching menus and categories:", error);
    return res.status(500).json({
      message: "An error occurred while fetching menus and categories.",
    });
  }
};


// Displaying menu by restaurant
const ShowMenu = async (req, res) => {
  try {
    const { restaurantName } = req.params;

    const restaurant = await Restaurant.findOne({ name: restaurantName });

    if (!restaurant) {
      return res
        .status(404)
        .json({ message: "Sorry, we couldn't find that restaurant." });
    }

    const menu = await Menu.findOne({ restaurantId: restaurant._id });

    if (!menu) {
      return res
        .status(404)
        .json({ message: "No menu found for this restaurant." });
    }

    return res.status(200).json(menu);
  } catch (error) {
    console.error("Error fetching menu for restaurant:", error);
    return res
      .status(500)
      .json({ message: "Oops! Something went wrong while fetching the menu." });
  }
};

// Displaying menu item
const ShowMenuItem = async (req, res) => {
  try {
    const { restaurantName, itemName } = req.params;

    const restaurant = await Restaurant.findOne({ name: restaurantName });

    if (!restaurant) {
      return res
        .status(404)
        .json({ message: "Sorry, we couldn't find that restaurant." });
    }

    const menu = await Menu.findOne({ restaurantId: restaurant._id });

    if (!menu) {
      return res
        .status(404)
        .json({ message: "No menu found for this restaurant." });
    }

    const menuItem = menu.items.find(
      (item) => item.name.toLowerCase() === itemName.toLowerCase()
    );

    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found." });
    }

    return res.status(200).json(menuItem);
  } catch (error) {
    console.error("Error fetching menu item:", error);
    return res.status(500).json({
      message: "Oops! Something went wrong while fetching the menu item.",
    });
  }
};

// Storing new menu
const StoreMenu = async (req, res) => {
  try {
    const { restaurantId, name, description, price, available, images } =
      req.body;

    // Validate input
    const { error } = validateStoreMenu(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: "Validation error", details: error.details });
    }

    // Process images
    let imageUrls = [];
    if (images && images.length > 0) {
      try {
        imageUrls = await Promise.all(images.map(uploadImage));
      } catch (uploadError) {
        console.error("Error uploading images:", uploadError);
      }
    }

    // Create the new menu item
    const newItem = {
      name,
      description,
      price,
      available,
      images: imageUrls,
    };

    // Check if a menu already exists for the restaurant
    let menu = await Menu.findOne({ restaurantId });
    if (menu) {
      // Add new item to the existing menu
      menu.items.push(newItem);
    } else {
      // Create a new menu if no existing menu found
      menu = new Menu({
        restaurantId,
        items: [newItem],
      });
    }

    const savedMenu = await menu.save();
    return res.status(menu.isNew ? 201 : 200).json(savedMenu);
  } catch (error) {
    console.error("Error storing menu:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Updating menu
const UpdateMenu = async (req, res) => {
  try {
    const { restaurantName } = req.params;
    const { items } = req.body;

    // Validate data
    const { error } = validateUpdateMenu(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: "Validation error", details: error.details });
    }

    // Finding the restaurant by name
    const restaurant = await Restaurant.findOne({ name: restaurantName });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found." });
    }

    // Finding the menu associated with the restaurant
    const menu = await Menu.findOne({ restaurantId: restaurant._id });
    if (!menu) {
      return res
        .status(404)
        .json({ message: "Menu not found for this restaurant." });
    }

    // Updating the menu items
    menu.items = items; // This will now include images as well
    menu.updatedAt = Date.now();

    const updatedMenu = await menu.save();

    return res.status(200).json(updatedMenu);
  } catch (error) {
    console.error("Error updating menu:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Deleting menu
const DeleteMenu = async (req, res) => {
  try {
    const { restaurantName } = req.params;

    const restaurant = await Restaurant.findOne({ name: restaurantName });

    if (!restaurant) {
      return res
        .status(404)
        .json({ message: "Sorry, we couldn't find that restaurant." });
    }

    const deletedMenu = await Menu.findOneAndDelete({
      restaurantId: restaurant._id,
    });

    if (!deletedMenu) {
      return res
        .status(404)
        .json({ message: "No menu found for this restaurant." });
    }

    return res.status(200).json({ message: "Menu deleted successfully." });
  } catch (error) {
    console.error("Error deleting menu:", error);
    return res
      .status(500)
      .json({ message: "Oops! Something went wrong while deleting the menu." });
  }
};

export { Menus, ShowMenu, ShowMenuItem, StoreMenu, UpdateMenu, DeleteMenu };
