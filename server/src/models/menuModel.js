import mongoose from "mongoose";
const { Schema, model } = mongoose;

const menuItemSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
    images: { type: [String], default: ["default-placeholder.png"] },
  },
  { timestamps: true }
);

const menuSchema = new Schema(
  {
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    items: [menuItemSchema],
  },
  { timestamps: true }
);

export default model("Menu", menuSchema);
