import { Router } from "express"

import { productsRoutes } from "./products-routes"
import { tablesRoutes } from "./tables-routes"
import { tablesSessionsRoutes } from "./table-sessions-routes"
import { ordersRoutes } from "./order-routes"

const routes = Router()
routes.use("/tables-sessions", tableSessionsRoutes)
routes.use("/products", productsRoutes)
routes.use("/tables", tablesRoutes)
routes.use("/orders", ordersRoutes)

export { routes }