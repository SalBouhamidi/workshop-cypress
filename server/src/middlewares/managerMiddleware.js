import { authMiddleware } from "./authMiddleware.js";

const managerMiddleware = (req, res, next) => {
  try {
    if (req.user.role !== "manager") {
      return res.status(403).json({
        success: false,
        message: "Access forbidden: Manager role required.",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Authorization failed.",
      error: error.message,
    });
  }
};

export { authMiddleware, managerMiddleware };
