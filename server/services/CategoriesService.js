import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CategoriesService {
    async find(query = {}) {
        let categories = await dbContext.Categories.find(query);
        return categories;
    }
    async findById(id) {
        let categories = await dbContext.Categories.findById(id);
        if (![categories]) {
            throw new BadRequest("Invalid Id");
        }
        return [categories];
    }
}

export const categoriesService = new CategoriesService();