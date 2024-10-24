import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["client", "manager", "super_admin", "delivery"],
    required: true,
  },
});

export default mongoose.model("Role", roleSchema);
const { Schema, model } = mongoose;
