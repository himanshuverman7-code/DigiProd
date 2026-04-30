import type { NextFunction, Request, Response } from "express";
import type ApiError from "../utils/ApiError.js";

const globalErrors = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const code = err.code || 500;
  const message = err.message || "Internal Server Error";
  const errors = err.errors || null;

  res.status(code).json({
    success: false,
    message,
    errors,
    data: null
  });
};


export default globalErrors
