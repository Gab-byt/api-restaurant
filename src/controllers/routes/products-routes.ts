import { Router} from "express"
import { ProductController } from "../products-controller"

const productsRoutes = Router()
const ProductsController = new ProductController()

productsRoutes.get("/", ProductController.index)
productsRoutes.post("/", ProductsController.create)
productsRoutes.put("/", ProductsController.update)
productsRoutes.delete("/", ProductsController.remove)

c
export { productsRoutes }