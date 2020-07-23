import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostsService {
  async find(query = {}) {
    let posts = await dbContext.Posts.find(query);
    return posts;
  }
  async findById(id) {
    let [posts] = await dbContext.Posts.findById(id);
    if (![posts]) {
      throw new BadRequest("Invalid Id");
    }
    return [posts];
  }
}

export const postsService = new PostsService();