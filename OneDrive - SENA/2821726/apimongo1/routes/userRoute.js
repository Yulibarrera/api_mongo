import {Router} from "express";
import { postUser } from "../controllers/user.Controller.js";

const userRoute = Router()

userRoute.post('/', postUser)

export default userRoute
