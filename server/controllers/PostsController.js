import express from "express";
import BaseController from "../utils/BaseController";
import { postsService } from "../services/PostsService";

export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getPost)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getPost(req, res, next) {
    try {
      let post = await postsService.findById(req.params.id)
      res.send({ data: post, message: "got single post" })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await postsService.delete(req.params.id)
      res.send("Deleted Post")
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let post = await postsService.edit(req.params.id, req.body)
      res.send({ data: post, message: "Edited" })
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      let posts = await postsService.find()
      res.send({ data: posts, message: "gots the posts" })
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let newPost = await postsService.create(req.body)
      res.send(newPost);
    } catch (error) {
      next(error);
    }
  }
}
