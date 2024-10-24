import mongoose from "mongoose";
<<<<<<< HEAD

const roleSchema = new mongoose.Schema({
  name: { type: String, enum: ["client", "manager", "super_admin", "delivery"], required: true },
});

export default mongoose.model("Role", roleSchema);
=======
const { Schema, model } = mongoose;

const roleSchema = new Schema({
  name: { type: String, enum: ["client", "manager", "super_admin"], required: true },
});

export default model("Role", roleSchema);
>>>>>>> 74257d0c7c9d6faa454922ff4c1a0b345744799f
