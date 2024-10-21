const {Restaurant} = require('../models/restaurantModel');
const {Category} = require('../models/categoryModel');
class restaurantController{
    async getAllRestaurant(){

    }

    async search(req, res){
        try {
            const { name, cuisine, city } = req.query;
            // if (!name) {
            //   return res.status(400).json({ message: 'please write the name of the restaurant you are looking for' });
            // }
            const query = {
                ...(name && { name: { $regex: name, $options: 'i' } }),
                ...(city && { 'location.city': city }),
            };
            let categoryId;
            if (cuisine) {
              const category = await Category.findOne({ name: { $regex: cuisine, $options: 'i' } });
              if (category) {
                categoryId = category._id; 
              }
            }
        
            if (categoryId) {
              query.categoryIds = categoryId;
            }
            const restaurants = await Restaurant.find(query);
            res.status(200).json(restaurants);

          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'smth bad happend' });
          }
    }
}

module.exports = new restaurantController;