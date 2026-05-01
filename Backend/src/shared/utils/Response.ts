import type { Response } from "express";
import { config } from "../../configs/env.config.js";

export const sendResponse = (res: Response, code:number, rawData: object) =>{
  const data = {...rawData, errors: null}
  res.status(code).json(data)
}

export const setCookies = (
  res: Response,
  cookie: { key: string; value: string },
  maxAge?: number,
) => {
  res.cookie(cookie.key, cookie.value, {
    httpOnly: true,
    sameSite: "production" === config.NODE_ENV,
    secure: "production" === config.NODE_ENV,
    maxAge,
  });
};
