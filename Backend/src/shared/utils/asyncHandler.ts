import type { NextFunction, Request, Response } from "express";

const asyncHandler =
  (fn: (req: Request, res: Response) => {}) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res)).catch((error) => next(error));
  };

export default asyncHandler;
