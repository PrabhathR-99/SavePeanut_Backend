import * as jwt from "jsonwebtoken";
import type { RequestHandler } from "express";
import errorHandler from "./../../middlewares/errorHandler";
import AppError from "../../models/appError";

const checkAuth: RequestHandler = (req, res, next) => {
  // get the token from the request header
  const token = req.headers.authorization?.split(" ")[1];

  // if the token is not present, return an error
  if (!token) {
    errorHandler(
      new AppError(401, {
        type: "Unauthorized",
        message: "You are not authorized to access this resource",
      }),
      req,
      res
    );
  } else {
    // else, verify the token
    jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
      // if there is an error, return an error
      if (err) {
        errorHandler(
          new AppError(401, {
            type: "Unauthorized",
            message: "You are not authorized to access this resource",
          }),
          req,
          res
        );
      } else {
        // else, proceed to the next middleware
        next();
      }
    });
  }
};

export default checkAuth;
