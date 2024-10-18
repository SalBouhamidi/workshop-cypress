const restaurantSchema = new Schema({
  name: { type: String, required: true },
  location: {
    city: { type: String, required: true },
    address: { type: String, required: true },
  },
  categoryIds: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  menuId: { type: Schema.Types.ObjectId, ref: "Menu", default: null },
  managerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model("Restaurant", restaurantSchema);
