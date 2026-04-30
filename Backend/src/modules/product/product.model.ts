import mongoose, { Document } from "mongoose";

export interface IPRODUCT {
  title: string;
  price: number;
  description: string;
  testimonials?: [{ name: string; feedback: string }];
  features?: [string];
}

export type PRODUCT_MODEL = IPRODUCT & Document;

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  price: {
    type: Number,
    default: 0,
  },
  description: String,
  testimonials: {
    type: [
      {
        name: String,
        feedback: String,
      },
    ],
    default: null,
  },
  features: {
    type: [String],
    default: null,
  },
});

productSchema.index({ title: 1, price: 1 }, { unique: true });

const Product = mongoose.model<PRODUCT_MODEL>("products", productSchema);
export default Product;
