// const express = require('express');
import express from "express"
const router = express.Router();
import restaurantController from "../controllers/User/restaurantController.js";


//restaurant Search : 
router.get('/search', restaurantController.search);
router.get('/categories', restaurantController.Category)



export default router;



