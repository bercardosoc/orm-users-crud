import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserCreate } from "../interfaces/user";
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