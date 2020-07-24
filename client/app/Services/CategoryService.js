import _store from "../store.js";

class ValuesService {
  constructor(){

  }
  selectCategory(selection){
    console.log(selection)
    _store.commit("category",selection)
  }
}

const service = new ValuesService();
export default service;
