import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostsService {
  async addComment(id, body) {
    return await dbContext.Posts.findByIdAndUpdate(
      { _id: id },
      { $addToSet: { comment: body } },
      { new: true }
    );
  }
  async deleteComment(postId, commentId) {
    return await dbContext.Posts.findByIdAndUpdate(
      { _id: postId },
      { $pull: { comment: { _id: commentId } } },
      { new: true }
    );
  }

  async delete(id) {
    return await dbContext.Posts.findByIdAndDelete(id)
  }
  async edit(id, body) {
    return await dbContext.Posts.findByIdAndUpdate(id, body, { new: true })
  }
  async create(body) {
    return await dbContext.Posts.create(body)
  }
  async find(query = {}) {
    let posts = await dbContext.Posts.find(query);
    return posts;
  }
  async findById(id) {
    let posts = await dbContext.Posts.findById(id);
    if (!posts) {
      throw new BadRequest("Invalid Id");
    }
    return posts;
  }
}

export const postsService = new PostsService();