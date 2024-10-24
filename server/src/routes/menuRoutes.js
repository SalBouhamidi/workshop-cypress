import express from "express";
import {
  Menus,
  ShowMenu,
  ShowMenuItem,
  StoreMenu,
  UpdateMenu,
  DeleteMenu,
} from "../controllers/Manager/menuController.js";
import { managerMiddleware } from "../middlewares/managerMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public Routes (Accessible without authentication)
router.get("/", Menus); // Display all menus
router.get("/:restaurantName/menu", ShowMenu); // Display menu by restaurant
router.get("/:restaurantName/:itemName", ShowMenuItem); // Display menu item by restaurant

// Protected Routes (Only Managers can access)
router.post("/store-menu", StoreMenu); // Create a new menu
// , authMiddleware, managerMiddleware
router.post(
  "/:restaurantName/update-menu",
  authMiddleware,
  managerMiddleware,
  UpdateMenu
); // Update a menu

router.post(
  "/:restaurantName/delete-menu",
  authMiddleware,
  managerMiddleware,
  DeleteMenu
); // Delete a menu

export default router;
