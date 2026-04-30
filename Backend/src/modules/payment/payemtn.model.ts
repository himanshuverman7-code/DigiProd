import mongoose, { Document } from "mongoose";

export interface IPAYMENT {
  name: string;
  email: string;
  phone: string;
  productId: mongoose.Types.ObjectId;
}

export type PAYMENT_MODEL = IPAYMENT & Document;

const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  productId: {
    type: mongoose.Schema.ObjectId,
    ref: "products",
  },
});

const Payment = mongoose.model<PAYMENT_MODEL>("payments", paymentSchema);
export default Payment;
