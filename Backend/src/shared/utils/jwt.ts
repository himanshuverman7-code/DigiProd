import jwt from "jsonwebtoken";
import { config } from "../../configs/env.config.js";

export const generateToken = (payload: string | object) => {
  const token = jwt.sign(payload, config.TOKEN_SECRET, {
    expiresIn: 1000 * 60 * 60 * 24 * 7,
  });
  return token
};
