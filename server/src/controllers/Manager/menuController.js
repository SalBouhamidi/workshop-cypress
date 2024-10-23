import mongoose from "mongoose";
import Menu from "../../models/menuModel.js";
import Restaurant from "../../models/restaurantModel.js";
import { validateStoreMenu } from "../../validations/manuValidation/storeMenuSchema.js";
import { validateUpdateMenu } from "../../validations/manuValidation/updateMenuSchema.js";

// Displaying all the menus
const Menus = async (req, res) => {
  try {
    const menus = await Menu.find().populate("restaurantId", "name location");

    if (menus.length === 0) {
      return res.status(404).json({ message: "No menus found." });
    }

    return res.status(200).json(menus);
  } catch (error) {
    console.error("Error fetching menus:", error);
    return res
      .status(500)
      .json({
        message: "Oops! Something went wrong while fetching the menus.",
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
    return res
      .status(500)
      .json({
        message: "Oops! Something went wrong while fetching the menu item.",
      });
  }
};

// Storing new menu
const StoreMenu = async (req, res) => {
  try {
    const { restaurantId, items } = req.body;

    // Validate input
    const { error } = validateStoreMenu(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: "Validation error", details: error.details });
    }

    // Checking if a menu already exists for the restaurant
    const existingMenu = await Menu.findOne({ restaurantId });
    if (existingMenu) {
      return res
        .status(400)
        .json({ message: "This restaurant already has a menu." });
    }

    // Creating a new menu if no existing menu found
    const newMenu = new Menu({
      restaurantId,
      items,
    });

    const savedMenu = await newMenu.save();

    return res.status(201).json(savedMenu); // Menu created
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
