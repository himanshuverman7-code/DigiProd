import ApiError from "../../shared/utils/ApiError.js";
import Product, { type IPRODUCT } from "./product.model.js";

export const createProduct = async (productDetails: IPRODUCT) => {
  try {
    return await Product.create(productDetails);
  } catch (error) {
    throw new ApiError(500, "Error occured while creating new product");
  }
};

export const findProduct = async (title: string, price: number) => {
  try {
    return await Product.findOne({title, price});
  } catch (error) {
    throw new ApiError(500, "Error occured while finding product");
  }
};