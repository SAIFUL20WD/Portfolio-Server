import { Schema, model } from "mongoose";
import { TPost } from "./post.interface";

const postSchema = new Schema<TPost>(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        image: { type: String, required: true },
        category: { type: String },
        comment: { type: String },
        tag: { type: [String] },
    },
    { timestamps: true, versionKey: false },
);

const Post = model<TPost>("post", postSchema);

export default Post;
