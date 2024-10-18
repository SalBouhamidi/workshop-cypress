import express from "express";
import {
  CreateMenu,
  DeleteMenu,
  EditMenu,
  MenuList,
  UpdateMenu,
} from "../controllers/menuController";

const router = express.Router();

router.get("/menu-lists", MenuList);
router.post("/create-menu", CreateMenu);
router.get("/edit-menu", EditMenu);
router.post("/update-menu", UpdateMenu);
router.post("/delete-menu", DeleteMenu);
