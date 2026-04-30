import asyncHandler from "../../shared/utils/asyncHandler.js";
import * as productService from "./product.services.js";

export const createProduct = asyncHandler(async (req, res) => {
  const product = await productService.createProductService(req.body)
  console.log(product);
  
  res.status(201).json(product)
});
