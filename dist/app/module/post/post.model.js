"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String },
    comment: { type: String },
    tag: { type: [String] },
}, { timestamps: true, versionKey: false });
const Post = (0, mongoose_1.model)("post", postSchema);
exports.default = Post;
