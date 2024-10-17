const categorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

module.exports = model("Category", categorySchema);
