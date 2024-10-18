import express from "express";
import {
  CreateMenu,
  DeleteMenu,
  EditMenu,
  MenuList,
  StoreMenu,
  UpdateMenu,
} from "../controllers/menuController";

const router = express.Router();

router.get("/menu-lists", MenuList);
router.get("/create-menu", CreateMenu);
router.post("/store-menu", StoreMenu);
router.get("/edit-menu:name", EditMenu);
router.post("/update-menu:name", UpdateMenu);
router.post("/delete-menu:name", DeleteMenu);
