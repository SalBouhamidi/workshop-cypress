import Restaurant from '../../models/restaurantModel.js';
import Category from '../../models/categoryModel.js';


class restaurantController{


    async search(req, res){
        try {
            const { name, cuisine, city } = req.query;
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
            if(restaurants.length > 0){
              res.status(200).json(restaurants);
            }else{
              res.status(200).json({"message": "There's no restaurants available"});
            }
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'smth bad happend' });
          }
    }
}

export default new restaurantController();
