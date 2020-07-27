import _store from '../store.js'
import Post from "../Models/Post.js";
import store from '../store.js';

// @ts-ignore
const _api = axios.create({
    baseURL: https://dev-struggles.herokuapp.com/api/posts",
    timeout: 10000
})




class PostsService {
    constructor() {
        this.getPosts()
    }

    addComment(comment, postId) {
        if (!_store.State.name)
            return false;
        let commentedPost = _store.State.posts.find(post => post.id == postId);
        console.log(commentedPost)
        // let com = { user: store.State.name, comment: comment, id: null }
        // commentedPost.comments.push(com)
        comment.user = store.State.name;

        _api.post(postId + "/comments", comment).then(res => {
            console.log("In Post Service", res);
            this.getPosts();
            console.log("in addcomment")
        }).catch(err => console.error(err))
        return true
    }
    deleteComment(postId, commentId) {
        // @ts-ignore
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                // @ts-ignore
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                let post = _store.State.posts.find(post => post.id == postId)
                let comment = post.comments.find(comment => comment.id == commentId)
                _api.delete(postId + "/comments/" + commentId).then(res => {
                    this.getPosts()
                }).catch(err => console.error(err))
            }
        })
    }

    likePost(postId) {
        console.log("liked")
        let likedPost = _store.State.posts.find(post => post.id == postId)
        likedPost.likes += 1;

        //-----------find post in store and splice/insert/update post???
        _api.put("/" + postId, likedPost).then(res => {
            let posts = _store.State.posts.map(p => {
                if (p.id == postId) {
                    // res.data.data is my updated post from the server with the new like
                    return new Post(res.data.data)
                } else {
                    return new Post(p)
                }
            })
            _store.commit("posts", posts)
        }).catch(err => console.error(err))
    }

    dislikePost(postId) {
        console.log("dislike")
        let likedPost = _store.State.posts.find(post => post.id == postId)
        likedPost.dislikes += 1;
        _api.put("/" + postId, likedPost).then(res => {
            let posts = _store.State.posts.map(c => {
                if (c.id == postId) {
                    // res.data.data is my updated post from the server with the new like
                    return new Post(res.data.data)
                } else {
                    return new Post(c)
                }
            })
            _store.commit("posts", posts)
        }).catch(err => console.error(err))
    }

    likeComment(postId, commentId) {
        console.log("liked")
        let post = _store.State.posts.find(post => post.id == postId)
        let likedComment = post.comments.find(comment => comment.id == commentId)
        likedComment.likes += 1;

        //-----------find post in store and splice/insert/update post???
        _api.put(postId + "/comments/" + commentId, likedComment).then(res => {
            let posts = _store.State.posts.map(p => {
                if (p.id == commentId) {
                    // res.data.data is my updated post from the server with the new like
                    return new Post(res.data.data)
                } else {
                    return new Post(p)
                }
            })
            _store.commit("posts", posts)
        }).catch(err => console.error(err))
    }

    dislikeComment(postId, commentId) {
        console.log("dislike")
        let post = _store.State.posts.find(post => post.id == postId)
        let dislikedComment = post.comments.find(comment => comment.id == commentId)
        dislikedComment.dislikes += 1;
        _api.put(postId + "/comments/" + commentId, dislikedComment).then(res => {
            let posts = _store.State.posts.map(c => {
                if (c.id == commentId) {
                    // res.data.data is my updated post from the server with the new like
                    return new Post(res.data.data)
                } else {
                    return new Post(c)
                }
            })
            _store.commit("posts", posts)
        }).catch(err => console.error(err))
    }


    getPosts() {
        _api.get("").then(res => {
            let posts = res.data.data.map(rawPostData => new Post(rawPostData))
            _store.commit("posts", posts)
        }).catch(err => console.error(err))
    }

    // getPosts() {
    //     let posts = _store.State.posts;
    //     _store.commit("posts", posts)
    // }

    deletePost(postId) {
        // @ts-ignore
        Swal.fire({
            title: 'Did you not get enough comments or likes?',
            text: "stick to your day job",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                // @ts-ignore
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                _api.delete("" + postId).then(res => {
                    this.getPosts()
                }).catch(err => console.error(err))
            }
        })
    }

    addPost(form) {
        if (!_store.State.name)
            return false
        let rawPostData = {
            imgUrl: form.postImageUrl.value,
            //comment: form.postComment.value,
            category: form.postTitle.value,
            name: store.State.name

        }
        _api.post("", new Post(rawPostData)).then(res => {
            console.log("In Post Service", res);
            this.getPosts()
        }).catch(err => console.error(err))
        return true
    }

    // addPost(rawPostData) {

    //     let post = new Post(rawPostData)
    //     _store.State.posts.push(post)
    //     _store.commit("posts", _store.State.posts)

    // }
}



const SERVICE = new PostsService()
export default SERVICE