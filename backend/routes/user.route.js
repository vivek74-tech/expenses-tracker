import express from "express";
import { userRegister,userLogin,userLogout } from "../controllers/users.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

  
router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/logout",userLogout);

// Check whether the user is logged in
router.get("/me", authMiddleware, (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user
  });
});

export default router;