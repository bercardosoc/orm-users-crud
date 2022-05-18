import { Router } from "express";
import { userCreateController, userSelfController, userTotalController } from "../controllers/user.controller";

export const routes = Router()

routes.post("/users", userCreateController)
routes.get("/users", userTotalController)
routes.get("/users/:id", userSelfController)
routes.patch("/users/<id>")
routes.delete("/users/<id>")