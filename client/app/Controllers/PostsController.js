import PostsService from "../Services/PostsService.js";
import store from "../store.js";

//Private
function _draw() {
  let posts = store.State.posts;
  console.log(posts);
}

//Public
export default class PostsController {
  constructor() {
    store.subscribe("posts", _draw);
  }
}
