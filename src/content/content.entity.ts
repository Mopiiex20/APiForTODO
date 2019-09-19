import { model, Schema } from "mongoose"

var ContentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  userid: String,
  status: Boolean
}, {
  collection: 'content'
}
);

export const todoModel = model('content', ContentSchema);