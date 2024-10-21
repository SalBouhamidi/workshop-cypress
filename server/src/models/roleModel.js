import { model, Schema } from "mongoose";

const roleSchema = new Schema({
  name: { type: String, enum: ["client", "manager", "super_admin"], required: true },
});

export default model("Role", roleSchema);
