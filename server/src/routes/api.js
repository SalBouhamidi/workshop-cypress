const express = require('express');
const router = express.Router();
const Restaurant = require('../controllers/restaurantController')



//restaurant Search : 
router.get('/search', Restaurant.search);




module.exports = router



