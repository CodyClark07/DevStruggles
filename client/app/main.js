import CategoryController from "./Controllers/CategoryController.js";
import PostsController from "./Controllers/PostsController.js";
import LoginController from "./Controllers/LoginController.js";

class App {
  categoryController = new CategoryController();
  postsController = new PostsController();
  loginController = new LoginController();
}

window["app"] = new App();
