import express from "express";
import BaseController from "../utils/BaseController";
import { categoriesService } from "../services/CategoriesService";

export class CategoriesController extends BaseController {
    constructor() {
        super("api/categories");
        this.router
            .get("", this.getAll)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            return res.send(["value1", "value2"]);
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(req.body);
        } catch (error) {
            next(error);
        }
    }
}
