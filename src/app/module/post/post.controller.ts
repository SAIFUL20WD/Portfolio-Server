import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { PostServices } from "./post.service";

const createPost = catchAsync(async (req, res) => {
    const result = await PostServices.createPostIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Post created successfully",
        data: result,
    });
});

const getAllPost = catchAsync(async (req, res) => {
    const result = await PostServices.getAllPostFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Posts retrieved successfully",
        data: result,
    });
});

const getPostById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await PostServices.getPostByIdFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Single Post retrieved successfully",
        data: result,
    });
});

const updatePost = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await PostServices.updatePostIntoDB(id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Post updated successfully",
        data: result,
    });
});

const deletePost = catchAsync(async (req, res) => {
    const { id } = req.params;

    const result = await PostServices.deletePostFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Post deleted successfully",
        data: result,
    });
});

export const PostControllers = {
    createPost,
    getAllPost,
    getPostById,
    updatePost,
    deletePost,
};
