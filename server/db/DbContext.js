import PostSchema from "../models/Posts";
import CategorySchema from "../models/Categories";
import mongoose from "mongoose";

class DbContext {
  Posts = mongoose.model("Post", PostSchema);
  Categories = mongoose.model("Category", CategorySchema);

}

export const dbContext = new DbContext();
