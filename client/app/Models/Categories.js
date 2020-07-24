export default class Category {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}