// const express = require('express');
import express from "express"
const router = express.Router();
import restaurantController from "../controllers/User/restaurantController.js";


//restaurant Search : 
router.get('/search', restaurantController.search);
router.get('/categories', restaurantController.Category);
router.get('/restaurant/:restaurantId', restaurantController.getRestaurantDishes)
router.post('/order', restaurantController.Order)



export default router;



