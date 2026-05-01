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
    return await Product.findOne({ title, price });
  } catch (error) {
    throw new ApiError(500, "Error occured while finding product");
  }
};

export const findAllProducts = async (page: number = 1, limit: number = 10) => {
  const skip = (page - 1) * limit;
  try {
    const totalProducts = await Product.countDocuments();
    const products = await Product.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    return {
      products,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts,
    };
  } catch (error) {
    throw new ApiError(500, "Error occured while finding all products");
  }
};

export const findProductById = async (id: string) => {
  try {
    return await Product.findById(id);
  } catch (error) {
    throw new ApiError(500, `invailid productId: ${id}`);
  }
};
