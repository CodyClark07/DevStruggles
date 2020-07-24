export default class Post {
  constructor(data) {
    this.id = data.id || data._id;
    this.comment = data.comment;
    this.imgUrl = data.imgUrl;
    this.likes = data.likes;
    this.dislikes = data.dislikes;
    this.title = data.title;
    this.name = data.name;
  }

  get Template() {
    // thumbup &#x1F44D; thumbsdown &#x1F44E;
    return this.comment
  }
}