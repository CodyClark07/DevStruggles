
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
    this.name = data.name || "No User"
  }

  get Template() {

    let template = /*html*/ `<div class="col-12 col-md-3">
    <div class="card my-1 bg-dark">
    <div class="text-right rounded">
    <i class="fa fa-times text-danger cursor px-1" aria-hidden="true" onclick="app.postsController.deletePost('${this.id}')"></i>
    </div>
    <img src="${this.imgUrl}" class="card-img-top p-3 rounded" alt="">
    <div class="card-body bg-secondary text-light rounded">
      <h5 class="card-title text-center mb-0">${this.title}</h5>
      <p class="card-text text-center mb-0">${this.name}</p> <p class="card-text">
      </p>
      <div class="text-center likes pb-2"> 
      <small class="text-light" style="cursor:pointer" onclick="app.postsController.likePost('${this.id}')">&#x1F44D; ${this.likes}</small>
      <small class="text-light" style="cursor:pointer" onclick="app.postsController.dislikePost('${this.id}')">&#x1F44E; ${this.dislikes}</small>
      </div>
      <form onsubmit="app.postsController.addComment(event,'${this.id}')">
       <div class="form-group col-12 text-center">
       <div class="input-group-prepend">
       <input type="text" class="form-control" placeholder="Add a Comment..."  name="postComment">
    <button type="submit" class="input-group-text" id="inputGroup-sizing-sm">+</button>
    </form>
    </div>
          
     </div>
        <h6 class="card-text text-light text-center rounded mb-0">${this.comments.length}&nbsp;COMMENTS</h6>
      <div class="comments border bg-light rounded text-dark pl-2 mt-0 " style="max-height:6rem; overflow:auto">
      `
    this.comments.forEach(com => template += `<p class="" style="display:block; border-bottom:solid 1px black"><i class="fa fa-times text-danger cursor" aria-hidden="true" onclick="app.postsController.deleteComment('${this.id}', '${com.id}')"></i><small>${com.user}</small>&nbsp; : &nbsp;<small>${com.comment}</small> <small class="text-white" style="cursor:pointer" onclick="app.postsController.likeComment('${this.id}','${com.id}')">&#x1F44D; ${com.likes}</small>
    <small class="text-white" style="cursor:pointer" onclick="app.postsController.dislikeComment('${this.id}','${com.id}')">&#x1F44E; ${com.dislikes}</small></p>`);
    template += `</div>
     
     
    </div>
    </div>
  </div>`

    return template;
  }
}