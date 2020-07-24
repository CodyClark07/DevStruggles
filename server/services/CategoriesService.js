import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CategoriesService {
    async delete(id) {
        return await dbContext.Categories.findByIdAndDelete(id)
    }
    async edit(id, body) {
        return await dbContext.Categories.findByIdAndUpdate(id, body, { upsert: true })
    }
    async create(body) {
        return await dbContext.Categories.create(body)
    }
    async find(query = {}) {
        let categories = await dbContext.Categories.find(query);
        return categories;
    }
    async findById(id) {
        let categories = await dbContext.Categories.findById(id);
        if (!categories) {
            throw new BadRequest("Invalid Id");
        }
        return categories;
    }
}

export const categoriesService = new CategoriesService();