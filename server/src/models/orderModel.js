import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
<<<<<<< HEAD
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
=======
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
>>>>>>> 9de9f3c0733d1fa7fb841b2dcf573615fca0c92d
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "in_progress", "delivered", "cancelled"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);
