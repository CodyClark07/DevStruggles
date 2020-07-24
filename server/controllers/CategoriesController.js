import express from "express";
import BaseController from "../utils/BaseController";
import { categoriesService } from "../services/CategoriesService";

export class CategoriesController extends BaseController {
    constructor() {
        super("api/categories");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getCategory)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }
    async getCategory(req, res, next) {
        try {
            let category = await categoriesService.findById(req.params.id)
            res.send({ data: category, message: "got single Category" })
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            await categoriesService.delete(req.params.id)
            res.send("Deleted Category")
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            let category = await categoriesService.edit(req.params.id, req.body)
            res.send({ data: category, message: "Edited" })
        } catch (error) {
            next(error)
        }
    }
    async getAll(req, res, next) {
        try {
            let categories = await categoriesService.find()
            res.send({ data: categories, message: "gots the Categories" })
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let newCategory = await categoriesService.create(req.body)
            res.send(newCategory);
        } catch (error) {
            next(error);
        }
    }
}
