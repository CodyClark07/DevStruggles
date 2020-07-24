
export default class Post {
  constructor(data) {
    this.id = data.id || data._id;
    this.comment = data.comment || "No Comment";
    this.imgUrl = data.imgUrl || "No Image";
    this.likes = data.likes || 0;
    this.dislikes = data.dislikes || 0;
    this.title = data.title || "No Title";
    this.name = data.name || "No Name"
  }

  get Template() {

    return `<div class="col-12 col-md-3">
    <div class="card">
    <img src="${this.imgUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <p class="card-text">${this.comment}</p>
      <p class="card-text">
        <small class="text-capitalize">${this.name}</small>
        <small class="text-muted">&#x1F44D; ${this.likes}</small>
        <small class="text-muted">&#x1F44E; ${this.dislikes}</small>
      </p>
    </div>
    </div>
  </div>`
  }
}