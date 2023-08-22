import { Router } from "express";
import { login, signup } from "./../../controllers/auth";
import loginSchema from "./../../schemas/login";
import userSchema from "./../../schemas/user";
import validateRequestSchema from "./../../middlewares/validateRequestSchema";

const authRouter = Router();

authRouter.post("/login", loginSchema, validateRequestSchema, login);
authRouter.post("/signup", userSchema, validateRequestSchema, signup);

export default authRouter;
