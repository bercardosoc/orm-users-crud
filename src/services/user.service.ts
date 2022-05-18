import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUSer, IUserCreate } from "../interfaces/user";
import bcrypt from "bcrypt"

export const userCreateService = async ({age, name, email, password}: IUserCreate) => {
 
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()
    const emailAlreadyExists = users.find(user => user.email === email)
    if (emailAlreadyExists) {
        throw new Error("Email already exists")
    }
    
    const user = new User()
    user.age = age
    user.name = name
    user.email = email 
    user.password = bcrypt.hashSync(password, 10)
    user.createdAt = Date().toString()
    user.updatedAt = Date().toString()

    userRepository.create(user)
    await userRepository.save(user)

    return user 
}

export const userTotalService = async () => {
    const userRepository = AppDataSource.getRepository(User)
    const users = userRepository.find()
    return users
}

export const userSelfService = async (id:string) => {
    
    const userRepository = AppDataSource.getRepository(User) 
    const users = await userRepository.find()
    const account = users.find(user => user.id === id)
    return account  
}

export const userUpdateService = async (id: string, age?: number, name?:string, email?: string) => {

    const userToUpdate = {
        id,
        age,
        name,
        email,
        updatedAt: Date().toString()
    }

    const userRepository = AppDataSource.getRepository(User) 
    const users = await userRepository.find()
    const account = users.find(user => user.id === id)
    
    if (account === undefined) {
        throw new Error("User not found")
    }
    
    const emailAlreadyExists = users.find(user => user.email === userToUpdate.email)
    if (emailAlreadyExists) {
        throw new Error("Email already exists")
    }

    await userRepository.update(account!.id, userToUpdate)
    
    return userToUpdate
    
}

export const userDeleteService = async (id:string) => {
    const userRepository = AppDataSource.getRepository(User) 
    const users = await userRepository.find()
    const account = users.find(user => user.id === id)
    if (account === undefined) {
        throw new Error("User not found")
    }
    await userRepository.delete(account!.id)
    return true
}