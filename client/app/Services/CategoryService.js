import _store from "../store.js";
import Post from "../Models/Post.js";

// @ts-ignore
const _api = axios.create({
  baseURL: "//localhost:3000/api/posts",
  timeout: 10000
})


class CategoryService {
  constructor() {

  }

  selectCategory(selection) {
    _api.get(`?category=${selection}`).then(res => {
      let posts = res.data.data.map(p => new Post(p))
      _store.commit("posts", posts)
    }).catch(err => console.error(err))
  }
}

const service = new CategoryService();
export default service;
