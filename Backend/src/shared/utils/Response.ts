import type { Response } from "express";
import { config } from "../../configs/env.config.js";

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
