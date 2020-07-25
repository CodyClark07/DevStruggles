import LoginService from "../Services/LoginService.js";
import store from "../store.js";


//Public
export default class LoginController {
    constructor() {
        store.State.name = ""
    }
    login(event) {
        event.preventDefault()
        LoginService.login(event.target)
        // @ts-ignore
        $("#loginModal").modal("hide")
        console.log(event);
    }
}