import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Categories = new Schema(
    {
        title: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Categories;