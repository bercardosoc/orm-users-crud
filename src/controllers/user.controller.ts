import { Request, Response } from "express";
import { userCreateService, userDeleteService, userSelfService, userTotalService, userUpdateService } from "../services";

export const userCreateController = async (req: Request, res: Response) => {

    try {

        const {age, name, email, password} = req.body
        const newUser = await userCreateService({ age, name, email, password})
        return res.status(201).send(newUser)

    } catch(err) {

        if (err instanceof Error) {

            return res.status(400).send({
                    "error": err.name,
                    "message": err.message
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
                "message": err.message
            })
        }
    }
}

export const userSelfController = async (req: Request, res: Response) => {
    
    try {
        const { id } = req.params
        const self = await userSelfService(id)
        return res.status(200).send(self) 

    } catch(err) {

        if(err instanceof Error) {
            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

export const userUpdateController = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const { age, name, email } = req.body
        const self = await userUpdateService(id, age, name, email)
        return res.status(200).send(self)
    
    } catch(err) {

        if(err instanceof Error) {
            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
    }

export const userDeleteController = async (req: Request, res: Response) => {
    
    try {

        const { id } = req.params
        const self = await userDeleteService(id)
        return res.status(200).json({message: "user sucessfully deleted"})
    
    } catch(err) {
        
        if(err instanceof Error) {
            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}
