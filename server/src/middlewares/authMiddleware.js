import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    console.log("token:::", token);
    console.log("req.header('Authorization')", req.header("Authorization"));
    console.log("process.env.JWT_SECRET", process.env.JWT_SECRET);
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded", decoded);

    const user = await userModel.findOne({ _id: decoded._id });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Authentication failed",
      error: error.message,
    });
  }
};

export { authMiddleware };
