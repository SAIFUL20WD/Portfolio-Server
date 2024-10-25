import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TPost } from "./post.interface";
import Post from "./post.model";

const createPostIntoDB = async (payLoad: TPost) => {
    const post = await Post.create(payLoad);
    return post;
};

const getAllPostFromDB = async () => {
    const posts = await Post.find();
    return posts;
};

const getPostByIdFromDB = async (id: string) => {
    const posts = await Post.findById(id);
    return posts;
};

const updatePostIntoDB = async (id: string, payLoad: Partial<TPost>) => {
    const post = await Post.findByIdAndUpdate(id, payLoad, { new: true });

    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, "Post not found");
    }
    return post;
};

const deletePostFromDB = async (id: string) => {
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, "Post not found");
    }
    return post;
};

export const PostServices = {
    createPostIntoDB,
    getAllPostFromDB,
    getPostByIdFromDB,
    updatePostIntoDB,
    deletePostFromDB,
};
