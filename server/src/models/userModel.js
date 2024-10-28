import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    roleId: { type: Schema.Types.ObjectId, ref: 'Role', default: '67160f42aa15f88cfe635264' },
    PhoneNumber: String,
    Address: String,
    resetToken: String,
    resetTokenExpiration: String,
    twoStepVerification: { type: Boolean, default: false },
    otp: String,
    OTPExpiration: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
