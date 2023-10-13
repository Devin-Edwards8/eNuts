import { ObjectId } from "mongodb";

export type ProductContract = {
    name: string, 
    price: number, 
    salePrice?: number, 
    popularItem: boolean,
    _id: typeof ObjectId
}

export type UserContract = {
    email: string,
    cart: ProductContract[]
}
