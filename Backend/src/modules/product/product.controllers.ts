import asyncHandler from "../../shared/utils/asyncHandler.js";
import * as productService from "./product.services.js";
import { findAllProducts, findProductById } from './product.repository.js';
import ApiError from "../../shared/utils/ApiError.js";
import { sendResponse } from "../../shared/utils/Response.js";

export const createProduct = asyncHandler(async (req, res) => {
  const product = await productService.createProductService(req.body)
  sendResponse(res, 201, {product})
});

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await findAllProducts(req.body)
    sendResponse(res, 200, {products})
});

export const getProduct = asyncHandler(async (req, res) => {
  const {id} = req.params
  if("string"!==typeof id || !id){
    throw new ApiError(400, "productId is required an should be a valid string")
  }
  const product = await findProductById(id)
  sendResponse(res, 200, {product})
});
