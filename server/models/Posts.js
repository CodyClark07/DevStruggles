import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Posts = new Schema(
  {
    title: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: Image, required: true },
    comments: { type: String, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Posts;
