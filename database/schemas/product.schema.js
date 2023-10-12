import { Schema } from 'mongoose';

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: {type: Number, required: false},
  popularItem: {type: Boolean, required: false },
  rating: {type: Number, required: true},
  numRatings: {type: Number, required: true}
});

export default productSchema;
