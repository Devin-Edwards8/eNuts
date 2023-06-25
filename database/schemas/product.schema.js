import { Schema } from 'mongoose';

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  popularItem: {type: Boolean, required: false }
});

export default productSchema;
