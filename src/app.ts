import express, { json } from "express";
// import userRouter from "./routes/user";
import authRouter from "./routes/auth";
import checkAuth from "./middlewares/checkAuth";
import cors from "cors";
import cookieParser from "cookie-parser";
import petRouter from "./routes/pet";

const app = express();

// global middleware
app.use(json());
app.use(cors());
app.use(cookieParser());

// routes

// public routes
app.use("/auth", authRouter);

// protected routes
// app.use(checkAuth);
app.use("/pet", petRouter);
// app.use("/user", userRouter);

export default app;
