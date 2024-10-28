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
router.get("/:restaurantId/menu", ShowMenu); // Display menu by restaurant
router.get("/:restaurantId/:itemName", ShowMenuItem); // Display menu item by restaurant

// Protected Routes (Only Managers can access)
router.post("/store-menu", StoreMenu); // Create a new menu
// , authMiddleware, managerMiddleware
router.put(
  "/update-menu/:itemId",
  // authMiddleware,
  // managerMiddleware,
  UpdateMenu
); // Update a menu

router.delete(
  "/delete-menu/:itemId",
  // authMiddleware,
  // managerMiddleware,
  DeleteMenu
); // Delete a menu

export default router;
