// const express = require('express');
import express from "express"
const router = express.Router();
import restaurantController from "../controllers/User/restaurantController.js";


//restaurant Search : 
router.get('/search', restaurantController.search);



export default router;



