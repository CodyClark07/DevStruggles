import CategoryService from "../Services/CategoryService.js";
import _store from "../store.js";

//Private
function _draw() {
  console.log("in cat draw");
  let modal = `<div class="modal-dialog modal-xl">
  <div class="modal-content">

    <!-- Modal Header -->
    <div class="modal-header">
      <h4 class="modal-title text-uppercase">${_store.State.category}</h4>
      <button type="button" class="close" data-dismiss="modal">&times;</button>
    </div>

    <!-- Modal body -->
    <div class="modal-body">
    </div>

    <!-- Modal footer -->
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
    </div>

  </div>
</div>`
  document.getElementById("categoryModal").innerHTML= modal;
}

//Public
export default class ValuesController {
  constructor() {
    _store.subscribe("category", _draw);
  }
  selectCategory(selection){
    CategoryService.selectCategory(selection);
  }
}
