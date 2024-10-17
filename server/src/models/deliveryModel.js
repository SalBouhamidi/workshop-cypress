const deliverySchema = new Schema({
  orderId: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  deliveryAgentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: ["assigned", "on_the_way", "delivered"],
    default: "assigned",
  },
  deliveredAt: { type: Date },
});

module.exports = model("Delivery", deliverySchema);