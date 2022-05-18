export interface IUSer {
    id: string 
    name: string 
    email: string 
    password: string 
    age: number 
    created_at: Date
    updated_at: Date
}

export interface IUserCreate {
    name: string 
    email: string 
    password: string 
    age: number
}

export interface IUserLogin { 
    email: string 
    password: string 
}