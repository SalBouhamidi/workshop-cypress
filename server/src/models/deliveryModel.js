import mongoose from "mongoose";
const { Schema, model } = mongoose;

const deliverySchema = new Schema({
  orderId: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  deliveryAgentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: ["assigned", "refused", "on_the_way", "delivered"],
    default: "assigned",
  },
  deliveredAt: { 
    type: Date,
    default: null
  },
},
{ timestamps: true }
);

export default model("Delivery", deliverySchema);