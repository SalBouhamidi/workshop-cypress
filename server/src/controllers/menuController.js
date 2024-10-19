import mongoose from "mongoose";
import Menu from "../models/menuModel.js";
import Restaurant from "../models/restaurantModel.js";

// displaying all the menus
const Menus = async (req, res) => {
  try {
    const menus = await Menu.find().populate("restaurantId", "name location");

    if (menus.length === 0) {
      return res.status(404).json({ message: "No menus found." });
    }

    return res.status(200).json(menus);
  } catch (error) {
    console.error("Error fetching menus:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// displaying menu by restaurant
const ShowMenu = async (req, res) => {
  try {
    const { restaurantName } = req.params;

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

    return res.status(200).json(menu);
  } catch (error) {
    console.error("Error fetching menu for restaurant:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// displaying menu item
const ShowMenuItem = async (req, res) => {
  try {
    const { restaurantName, itemName } = req.params;

    // Finding the restaurant by name
    const restaurant = await Restaurant.findOne({ name: restaurantName });

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found." });
    }

    const menu = await Menu.findOne({ restaurantId: restaurant._id });

    if (!menu) {
      return res
        .status(404)
        .json({ message: "Menu not found for this restaurant." });
    }

    // Finding the specific item in the menu
    const menuItem = menu.items.find(
      (item) => item.name.toLowerCase() === itemName.toLowerCase()
    );

    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found." });
    }

    return res.status(200).json(menuItem);
  } catch (error) {
    console.error("Error fetching menu item:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// storing new menu
const StoreMenu = async (req, res) => {
  return res.json("store menu");
};

// updating menu 
const UpdateMenu = () => {
  return;
};

// deleting menu
const DeleteMenu = () => {
  return;
};

export {
  Menus,
  ShowMenu,
  ShowMenuItem,
  StoreMenu,
  UpdateMenu,
  DeleteMenu,
};
