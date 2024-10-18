const roleSchema = new Schema({
  name: { type: String, enum: ["client", "manager", "super_admin"], required: true },
});

module.exports = model("Role", roleSchema);
