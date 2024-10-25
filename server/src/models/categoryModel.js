import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
<<<<<<< HEAD
  name: { type: String, required: true },
=======
  name: { type: String, required: true }, 
>>>>>>> 9de9f3c0733d1fa7fb841b2dcf573615fca0c92d
  description: { type: String },
});

export default mongoose.model("Category", categorySchema);
