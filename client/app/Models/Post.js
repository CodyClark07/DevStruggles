
export default class Post {
  constructor(data) {
    this.id = data.id || data._id;
    this.category = data.category;
    this.comment = data.comment || "No Comment";
    this.imgUrl = data.imgUrl || "No Image";
    this.likes = data.likes || 0;
    this.dislikes = data.dislikes || 0;
    this.title = data.title || "No Title";
    this.name = data.name || "No Name"
  }

  get Template() {

    return `<div class="col-12 col-md-3 ">
    <div class="card my-1">
    <button type="button" class="close text-right" onclick="app.postsController.deletePost('${this.id}')" aria-label="Close">
  <span class="m-1" aria-hidden="true">&times;</span>
</button>
    <img src="${this.imgUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title text-center">${this.title}</h5>
       <div class="form-group col-12 text-center">
       <div class="input-group-prepend">
       <input type="text" class="form-control" placeholder="Add a Comment..."  name="postComment"></input>
    <span class="input-group-text" id="inputGroup-sizing-sm">+</span>
    </div>
          
     </div>
      <p class="card-text">${this.name}: ${this.comment}</p>
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