import { Schema, mongoose } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true },
  id: { type: mongoose.Types.ObjectId, required: true },
});

export default userSchema;
