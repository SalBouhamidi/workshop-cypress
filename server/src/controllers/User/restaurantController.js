import Restaurant from '../../models/restaurantModel.js';
import Category from '../../models/categoryModel.js';


class restaurantController {

  async Category(req, res) {
    try {
      let categories = await Category.find();
      return res.json({ categories });
    } catch (e) {
      return res.json({ message: "There's smth bad happened" })
    }

  }
  async search(req, res) {
    const { name, category } = req.query;
    console.log(req.query);
    const query = {};
    if(name){
        query.name = { $regex: name, $options: 'i' };
    }
    if (category) {
      const selectedcategory = await Category.findOne({name:category});
      if (selectedcategory) {
        query.categoryIds = selectedcategory._id;        
      }
    }
    const restaurants = await Restaurant.find(query);
    if (restaurants.length > 0) {
      return res.status(200).json(restaurants);
    } else {
      return res.status(404).json({ message: "There's no restaurants available under your specific requirement" });
    }

  } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'smth bad happend' });
  }
}


export default new restaurantController();
