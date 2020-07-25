
export default class Post {
  constructor(data) {
    this.id = data.id || data._id;
    this.category = data.category;
    this.comment = data.comment || [];
    this.imgUrl = data.imgUrl || "No Image";
    this.likes = data.likes || 0;
    this.dislikes = data.dislikes || 0;
    this.title = data.title || "No Title";
    this.name = data.name || "No Name"
  }

  get Template() {

    let template = `<div class="col-12 col-md-3 ">
    <div class="card my-1">
    <button type="button" class="close text-right" onclick="app.postsController.deletePost('${this.id}')" aria-label="Close">
  <span class="m-1" aria-hidden="true">&times;</span>
</button>
    <img src="${this.imgUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title text-center">${this.title}</h5>
      <p class="card-text">${this.name}</p>
      <form onsubmit="app.postsController.addComment(event,'${this.id}')">
       <div class="form-group col-12 text-center">
       <div class="input-group-prepend">
       <input type="text" class="form-control" placeholder="Add a Comment..."  name="postComment"></input>
    <button type="submit" class="input-group-text" id="inputGroup-sizing-sm">+</button>
    </form>
    </div>
          
     </div>
        <p class="card-text bg-secondary text-light text-center mb-0">${this.comment.length}&nbsp;COMMENTS</p>
      <div class="comments border bg-primary text-light pl-2 mt-0 " style="max-height:6rem; overflow:auto">
      `
    this.comment.forEach(com => template += `<small class="" style="display:block; border-bottom:solid 1px black">${String(com)}</small>`);
    template += `</div>
     
      <p class="card-text">
        <small class="text-capitalize">${this.name}</small>
        <small class="text-muted" style="cursor:pointer" onclick="app.postsController.likePost('${this.id}')">&#x1F44D; ${this.likes}</small>
        <small class="text-muted" style="cursor:pointer" onclick="app.postsController.dislikePost('${this.id}')">&#x1F44E; ${this.dislikes}</small>
      </p>
    </div>
    </div>
  </div>`

    return template;
  }
}