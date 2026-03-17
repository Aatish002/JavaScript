import {Router} from "express";
import { register, userLogin } from "../controllers/auth.controller.js";

const router=Router();
router.route("/register").post(register);
router.route("/login").post(userLogin);

export default router;
