import userModel from "../../models/userModel.js";
import Role from "../../models/roleModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel
      .find()
      .populate("roleId", "name permissions")
      .select(
        "-password -resetToken -resetTokenExpiration -otp -OTPExpiration"
      );
    res.status(200).json({
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
