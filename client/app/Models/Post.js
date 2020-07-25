
export default class Post {
  constructor(data) {
    this.id = data.id || data._id;
    this.category = data.category;
    if (data.comments) {

      this.comments = data.comments || []
    }
    this.imgUrl = data.imgUrl || "No Image";
    this.likes = data.likes || 0;
    this.dislikes = data.dislikes || 0;
    this.title = data.title || "No Title";
    this.name = data.name || "No Name"
  }

  get Template() {

    let template = /*html*/ `<div class="col-12 col-md-3 ">
    <div class="card my-1">
    <div class="text-right">
    <i class="fa fa-times text-danger cursor" aria-hidden="true" onclick="app.postsController.deletePost('${this.id}')"></i>
    </div>
    <img src="${this.imgUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title text-center">${this.title}</h5>
      <p class="card-text">${this.name}</p>
      <form onsubmit="app.postsController.addComment(event,'${this.id}')">
       <div class="form-group col-12 text-center">
       <div class="input-group-prepend">
       <input type="text" class="form-control" placeholder="Add a Comment..."  name="postComment">
    <button type="submit" class="input-group-text" id="inputGroup-sizing-sm">+</button>
    </form>
    </div>
          
     </div>
        <p class="card-text bg-secondary text-light text-center mb-0">${this.comments.length}&nbsp;COMMENTS</p>
      <div class="comments border bg-primary text-light pl-2 mt-0 " style="max-height:6rem; overflow:auto">
      `
    this.comments.forEach(com => template += `<p class="" style="display:block; border-bottom:solid 1px black"><i class="fa fa-times text-danger cursor" aria-hidden="true" onclick="app.postsController.deleteComment('${this.id}', '${com.id}')"></i><small>${com.user}</small>&nbsp; : &nbsp;<small>${com.comment}</small> <small class="text-white" style="cursor:pointer" onclick="app.postsController.likeComment('${this.id}','${com.id}')">&#x1F44D; ${com.likes}</small>
    <small class="text-white" style="cursor:pointer" onclick="app.postsController.dislikeComment('${this.id}','${com.id}')">&#x1F44E; ${com.dislikes}</small></p>`);
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