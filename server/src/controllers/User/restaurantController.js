import Restaurant from '../../models/restaurantModel.js';
import Category from '../../models/categoryModel.js';
import Menu from "../../models/menuModel.js"
import Order from "../../models/orderModel.js"


class restaurantController {

  async Category(req, res) {
    try {
      let categories = await Category.find();
      return res.json({ categories });
    } catch (e) {
      return res.json({ message: "There's smth bad happened" , e})
    }

  }

  async getRestaurantDishes(req, res){
    let restaurantId = req.params.restaurantId;
    // console.log(restaurantId)
    try{
      const menu = await Menu.find({restaurantId:restaurantId});
      return res.json({menu});
    }catch(e){
      return res.json({ message: "There's smth bad happened" , e})
    }
  }

  async search(req, res) {
    try{
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
    }catch(error) {
    console.error(error);
    res.status(500).json({ error: 'smth bad happend' });
  }
}


  async Order(req, res){
    console.log("Request Body:", req.body);

    const { clientId, restaurantId, items, totalPrice, status } = req.body;

    try {
        const newOrder = new Order({
            clientId,
            restaurantId,
            items,
            totalPrice,
            status,
        });

      let result = await newOrder.save();
      if(result){
        return res.status(200).json({message: "Your order passed successfully"})
      }else{
        return res.status(400).json({message: "failed"})

      }
  }catch(e){
    return res.json({message: "there's an error", e})

  }
}
async fetchRestaurants(req, res){
  try{
    let results = await Menu.aggregate([
      {
        $lookup:{
          from: "restaurants",
          localField: 'restaurantId',
          foreignField: '_id',
          as: "restaurantDetails"
        }
      }
    ]);
    return res.status(200).json(results)
  }catch(e){
    return res.json({message: "there's an error", e})
  }
}
async GetMenu(req, res){
  const { restaurantId } = req.params;
  try {
    const dishes = await Menu.find({restaurantId:restaurantId }); 
    res.status(200).json(dishes);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
}
} 

}


export default new restaurantController();
