import { model, Schema } from "mongoose"

var AuthSchema = new Schema({
  _id: Schema.Types.ObjectId,
  email: String,
  password: String,
  age: Number,
  firstName: String,
  roleId: Number,
  avatar: String
}, {
    collection: 'users'
  }
);

export const authModel = model('users', AuthSchema);