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
router.post("/update-menu/id", UpdateMenu);
router.post("/delete-menu/:id", DeleteMenu);

export default router;
