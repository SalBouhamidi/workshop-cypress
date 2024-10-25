import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["client", "manager", "super_admin", "delivery"],
    required: true,
  },
});

export default mongoose.model("Role", roleSchema);
<<<<<<< HEAD
const { Schema, model } = mongoose;
=======
>>>>>>> 9de9f3c0733d1fa7fb841b2dcf573615fca0c92d
