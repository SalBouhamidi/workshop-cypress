import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    roleId: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
    PhoneNumber: String,
    Address: String,
    roleId: { type: Schema.Types.ObjectId, ref: "Role", required: true },
    resetToken: String,
    resetTokenExpiration: String,
    twoStepVerification: { type: Boolean, default: false },
    otp: String,
    OTPExpiration: String,
  },
  { timestamps: true }
);

export default model("User", userSchema);
