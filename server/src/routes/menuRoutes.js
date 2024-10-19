import express from "express";
import {
  Menus,
  ShowMenu,
  ShowMenuItem,
  StoreMenu,
  UpdateMenu,
  DeleteMenu,
} from "../controllers/menuController.js";

const router = express.Router();

// display all the menus route
router.get("/", Menus);

// display menu by restaurant route
router.get("/:restaurantName/menu", ShowMenu);

// display menu item by restaurant route
router.get("/:restaurantName/:itemName", ShowMenuItem);

// create route
router.post("/store-menu", StoreMenu);

// update route
router.post("/:restaurantName/update-menu", UpdateMenu);

// delete route
router.post("/:restaurantName/delete-menu/", DeleteMenu);

export default router;
