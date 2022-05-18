import { Request, Response } from "express";
import { request } from "http";
import { userCreateService, userSelfService, userTotalService } from "../services";

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

export const userTotalController = async (req: Request, res: Response) => {
    
    try {
        const users = await userTotalService()
        return res.send(users)
    }
    catch (err) {

        if(err instanceof Error) {
            return res.status(400).send({
                "error": err.name,
                "message": err.name
            })
        }
    }
}

export const userSelfController = async (req: Request, res: Response) => {
    
    const { id } = req.params
    const self = await userSelfService(id)
    return res.status(200).send(self)
}