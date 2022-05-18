import { Router } from "express";
import { userCreateController } from "../controllers/user.controller";

export const routes = Router()

routes.post("/users", userCreateController)
routes.post("/users/login")
routes.get("/users")
routes.get("/users/<id>")
routes.patch("/users/<id>")
routes.delete("/users/<id>")