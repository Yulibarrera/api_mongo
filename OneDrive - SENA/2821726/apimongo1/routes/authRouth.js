import { Router } from "express";
import { login } from "../controllers/user.Controller.js";

const authRouter = Router();

authRouter.post('/', login)

export default authRouter
