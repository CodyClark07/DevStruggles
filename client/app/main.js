//  import CategoryController from "./Controllers/CategoryController.js";
import PostsController from "./Controllers/PostsController.js";
import CategoryController from "./Controllers/CategoryController.js";

class App {
  categoryController = new CategoryController();
  postsController = new PostsController();

}

window["app"] = new App();
