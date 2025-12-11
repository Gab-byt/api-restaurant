import { Router} from "express"

import { TablesSessionsController } from "@/controllers/tables-sessions-controller"

const TablesSessionsController = Router()
const TablesSessionsController = new TablesSessionsController()

tableSessionsRoutes.get("/", TablesSessionsController.index)
TablesSessionsRoutes.post("/", TablesSessionsController.create)
TablesSessionsRoutes.patch("/sessions/:id", TablesSessionsController.update)


export { TablesSessionsController }