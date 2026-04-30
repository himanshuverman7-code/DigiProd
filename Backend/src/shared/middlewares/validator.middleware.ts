import type { Request, Response, NextFunction } from "express";
import * as z from "zod";
import ApiError from "../utils/ApiError.js";

const validator =
  (schema: z.ZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    const rawData = "GET" === req.method ? req.query : req.body;

    const { data, success, error } = schema.safeParse(rawData);

    if (!success) {
      const errors = z.treeifyError(error);
      next(new ApiError(400, "Error occur while validating", errors.properties));
    }
    if ("GET" === req.method) {
      //   if ("undefined" !== typeof data) req.query= data;
    } else {
      req.body = data;
    }
    next();
  };

export default validator;
