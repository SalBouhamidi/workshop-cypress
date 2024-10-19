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

router.get("/", Menus);
router.get("/:restaurantName/menu", ShowMenu);
router.get("/:restaurantName/:itemName", ShowMenuItem);
router.post("/store-menu", StoreMenu);
router.post("/:restaurantName/update-menu", UpdateMenu);
router.post("/:restaurantName/delete-menu/", DeleteMenu);

export default router;
