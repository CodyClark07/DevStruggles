import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: { type: String, required: true },
  user: { type: String, required: true }
})
const Posts = new Schema(
  {
    title: { type: String, required: false },
    name: { type: String, required: false },
    description: { type: String, required: false },
    imgUrl: { type: String, required: true },
    comments: [{ type: CommentSchema }],
    likes: { type: Number, required: false },
    dislikes: { type: Number, required: false },
    category: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Posts;
