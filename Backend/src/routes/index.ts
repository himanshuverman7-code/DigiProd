import { Router } from "express";
import paymentRoutes from "../modules/payment/payment.routes.js";
import productRoutes from "../modules/product/product.routes.js";

const routes = Router()

routes.use('/pyament', paymentRoutes)
routes.use('/products', productRoutes)


export default routes