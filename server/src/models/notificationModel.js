import mongoose from "mongoose";
const { Schema, model } = mongoose;

const notificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  type: {
    type: String,
    enum: ["order_status", "new_order", "delivery_status"],
    required: true,
  },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default model("Notification", notificationSchema);
