import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: { type: String, required: true },
  user: { type: String, required: true }
})
const Posts = new Schema(
  {
    title: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    comments: [{ type: CommentSchema }],
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    category: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Posts;
