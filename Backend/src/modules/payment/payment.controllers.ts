import type { Request, Response } from "express";
import asyncHandler from "../../shared/utils/asyncHandler.js";
import * as pyamentServices from "./payment.services.js";

export const createPayment = asyncHandler(
  async (req, res) => {
    const { name, email, phone, productId } = req.body;

    await pyamentServices.createPaymentService();
  },
);
