import ApiError from "../../shared/utils/ApiError.js";
import type { IPRODUCT } from "./product.model.js";
import { createProduct, findProduct } from "./product.repository.js";

export const createProductService = async (productDetails: IPRODUCT) => {
  const { title, price } = productDetails;

  const isProductExist = await findProduct(title, price);

  if (isProductExist) {
    throw new ApiError(409, "product already exist with same title & price");
  }

  const product = await createProduct(productDetails);
  return product;
};
