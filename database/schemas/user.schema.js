import { Schema } from 'mongoose';
import productSchema from './product.schema.js';

const userSchema = new Schema({
  email: { type: String, required: true },
  cart: { type: [productSchema]}
});

export default userSchema;
