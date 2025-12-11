import {Router} from "express"

import { TablesController, TablesController } from "../tables-controllers"

const tablesRoutes = Router()
const TablesController = new TablesController()

tablesRoutes.get("/", TablesController.index)

export {tablesRoutes} 
