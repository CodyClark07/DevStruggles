import _postsService from '../Services/PostsService.js'
import _store from '../store.js'


// we need a blank template
// we need the posts
// we need the element to inject into
function _draw() {
    let template = ""
    console.log("draw ran");
    let posts = _store.State.posts
    console.log();
    posts.forEach(post => template += post.Template)
    document.getElementById("posts").innerHTML = template;
}


export default class PostsController {
    constructor() {
        _store.subscribe("posts", _draw)
    }
    addPost(event) {
        event.preventDefault();
        let form = event.target;
        let rawPostData = {
            imgUrl: form.postImageUrl.value,
            comment: form.postComment.value,
            category: form.postTitle.value,

        }
        _postsService.addPost(rawPostData);
        event.target.reset();

    }

    deletePost(postId) {
        _postsService.deletePost(postId)
    }

    likePost(postId) {
        _postsService.likePost(postId)
    }
    dislikePost(postId) {
        _postsService.dislikePost(postId)
    }


}
// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                event.preventDefault();
                form.classList.add('was-validated');
                app.postsController.addPost(event);

            }, false);
        });
    }, false);
})();