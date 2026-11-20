import express from "express";
import { login } from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/login", (req, res) => {
    // Call the login controller function
    login(req, res);
});
export default router;