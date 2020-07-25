import _store from '../store.js'
import Post from "../Models/Post.js";
import store from '../store.js';

// @ts-ignore
const _api = axios.create({
    baseURL: "//localhost:3000/api/posts",
    timeout: 10000
})


class PostsService {
    constructor() {
        this.getPosts()
    }

    likePost(postId) {
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
        _api.delete("" + postId).then(res => {
            this.getPosts()
        }).catch(err => console.error(err))
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