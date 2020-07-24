import store from "../store.js";

class LoginService {
    constructor() {
        console.log('');
    }
    login(target) {
        store.commit("name", target.user.value)
        console.log(store.State.name);
    }
}

const service = new LoginService();
export default service;
