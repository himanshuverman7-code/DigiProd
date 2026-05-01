import { Router } from "express";
import * as productControllers from "./product.controllers.js";
import validator from "../../shared/middlewares/validator.middleware.js";
import { createproductSchema } from "./product.schemas.js";

const productRoutes = Router();

productRoutes.post(
  "/create",
  validator(createproductSchema),
  productControllers.createProduct,
);

productRoutes.get(
    '/', 
    productControllers.getAllProducts
);

productRoutes.get(
    '/:id', 
    productControllers.getProduct
);

export default productRoutes;
