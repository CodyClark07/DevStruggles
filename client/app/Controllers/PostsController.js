import _postsService from '../Services/PostsService.js'
import _store from '../store.js'

// we need a blank template
// we need the posts
// we need the element to inject into
function _draw() {
    let template = ""
    console.log("draw ran");
    let posts = _store.State.posts
    posts.forEach(post => template += post.Template)
    document.getElementById("posts").innerHTML = template
}

export default class PostsController {
    constructor() {
        console.log("Hello from posts controller");
        _store.subscribe("posts", _draw)
    }

    addPost(event) {
        event.preventDefault();
        let formData = event.target.postCategory.value;
        console.log(formData);
        // let rawPostData = {
        //     //USER???
        //     imgUrl: formData.imgUrl.value,
        //     description: formData.description.value,
        // }
        // _postsService.addPost(rawPostData)
        console.log(event.target)
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
                form.classList.add('was-validated');
                // console.log(document.getElementById("postModal"))
                window["app"].postController.addPost(event);

            }, false);
        });
    }, false);
})();