import { Router } from "express";
import { login, signup } from "../controllers/auth";

const router = Router();

router.post("/auth/signup", signup);
router.post("/auth/login", login);


export default router;
