import _store from '../store.js'
import Post from "../Models/Post.js";

// @ts-ignore
const _api = axios.create({
    baseURL: "//localhost:3000/api",
    timeout: 10000
})


class PostsService {
    constructor() {
        console.log("Hello from the post service");
        this.getPosts()
    }

    likePost(postId) {
        let likedPost = _store.State.posts.find(post => post.id == postId)
        likedPost.likes += 1;

    //-----------find post in store and splice/insert/update post???
        _api.put("posts/" + postId, likedPost).then(res => {
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

    dislikePost(postId){
        let likedPost = _store.State.posts.find(post => post.id == postId)
        likedPost.dislikes += 1;
        _api.put("posts/" + postId, likedPost).then(res => {
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
        _api.get("posts").then(res => {
            console.log(res);
            let posts = res.data.data.map(rawPostData => new Post(rawPostData))
            _store.commit("posts", posts)
        }).catch(err => console.error(err))
    }

    deletePost(carId) {
        _api.delete("posts/" + carId).then(res => {
            this.getPosts()
        }).catch(err => console.error(err))
    }

    addPost(rawPostData) {
        _api.post("posts", rawPostData).then(res => {
            console.log(res);
            // NOTE we have other users adding to this db collection so now is a nice time to refresh and sync our local data with our db. We could of just pushed this new post from the response back into our local if it was a private collection that only we modify.
            this.getPosts()
        }).catch(err => console.error(err))
    }
}


const SERVICE = new PostsService()
export default SERVICE