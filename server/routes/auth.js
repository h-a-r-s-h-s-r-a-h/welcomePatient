import express from "express";
const router = express.Router();
import {
  register,
  login,
  logout,
  currentUser,
  sendTestEmail,
  forgotPassword,
  resetPassword,
  verifyEmail,
  registerAdmin,
  allAdminUsers,
} from "../controllers/auth.js";
import { requireSignin } from "../middlewares/index.js";

router.post("/register", register);
router.post("/registerAsAdmin", registerAdmin);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);
router.get("/send-email", sendTestEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/verify-email", verifyEmail);
router.get("/admin/users", requireSignin, allAdminUsers);

export default router;
