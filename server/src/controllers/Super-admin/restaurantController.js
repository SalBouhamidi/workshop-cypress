import Restaurant from "../../models/restaurantModel.js";

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single restaurant
exports.getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant)
      return res.status(404).json({ message: "Restaurant not found" });
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
  const newRestaurant = new Restaurant(req.body);
  try {
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a restaurant
exports.updateRestaurant = async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRestaurant)
      return res.status(404).json({ message: "Restaurant not found" });
    res.status(200).json(updatedRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a restaurant
exports.deleteRestaurant = async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deletedRestaurant)
      return res.status(404).json({ message: "Restaurant not found" });
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Additional restaurant-specific methods could be added here, for example:

// Search restaurants by cuisine
exports.searchByCuisine = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: req.query.cuisine });
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get top-rated restaurants
exports.getTopRated = async (req, res) => {
  try {
    const topRestaurants = await Restaurant.find()
      .sort({ rating: -1 })
      .limit(10);
    res.status(200).json(topRestaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
