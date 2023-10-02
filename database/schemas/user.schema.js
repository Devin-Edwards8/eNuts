import { Schema } from 'mongoose';
import Product from '../models/product.model';

const userSchema = new Schema({
  email: { type: String, required: true },
  cart: { type: Array[Product]}
});

export default userSchema;
