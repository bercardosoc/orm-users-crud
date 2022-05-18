import { Router } from "express";
import { userCreateController, userDeleteController, userSelfController, userTotalController, userUpdateController } from "../controllers";

export const routes = Router()

routes.post("/users", userCreateController)
routes.get("/users", userTotalController)
routes.get("/users/:id", userSelfController)
routes.patch("/users/:id", userUpdateController)
routes.delete("/users/:id", userDeleteController)