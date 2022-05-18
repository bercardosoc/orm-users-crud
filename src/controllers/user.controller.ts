import { Request, Response } from "express";
import { userCreateService } from "../services";

export const userCreateController = async (req: Request, res: Response) => {

    try {

        const {age, name, email, password} = req.body
        const newUser = await userCreateService({ age, name, email, password})
        return res.status(201).send(newUser)

    } catch(err) {

        if (err instanceof Error) {
            return res.status(400).send({
                    "error": err.name,
                    "message": err.name
                })
            }
        }
    }