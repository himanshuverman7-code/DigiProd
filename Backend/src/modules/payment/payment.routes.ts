import { Router } from "express";
import * as paymentControllers from "./payment.controllers.js";
import validator from "../../shared/middlewares/validator.middleware.js";
import { paymentSchema } from "./payment.schema.js";

const paymentRoutes = Router();

paymentRoutes.post("/payment", validator(paymentSchema), paymentControllers.createPayment);

export default paymentRoutes;
