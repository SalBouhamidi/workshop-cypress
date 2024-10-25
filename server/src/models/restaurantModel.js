import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    city: { type: String, required: true },
    address: { type: String, required: true },
  },
  categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", default: null },
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Restaurant", restaurantSchema);
<<<<<<< HEAD
=======

>>>>>>> 9de9f3c0733d1fa7fb841b2dcf573615fca0c92d
