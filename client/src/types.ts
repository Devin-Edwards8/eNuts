import { ObjectId } from "mongodb";

export type ProductContract = {
    name: string, 
    price: number, 
    salePrice?: number, 
    popularItem: boolean,
    _id: typeof ObjectId
}
