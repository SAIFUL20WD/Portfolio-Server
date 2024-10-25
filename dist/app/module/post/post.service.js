"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const post_model_1 = __importDefault(require("./post.model"));
const createPostIntoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_model_1.default.create(payLoad);
    return post;
});
const getAllPostFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield post_model_1.default.find();
    return posts;
});
const getPostByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield post_model_1.default.findById(id);
    return posts;
});
const updatePostIntoDB = (id, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_model_1.default.findByIdAndUpdate(id, payLoad, { new: true });
    if (!post) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Post not found");
    }
    return post;
});
const deletePostFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_model_1.default.findByIdAndDelete(id);
    if (!post) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Post not found");
    }
    return post;
});
exports.PostServices = {
    createPostIntoDB,
    getAllPostFromDB,
    getPostByIdFromDB,
    updatePostIntoDB,
    deletePostFromDB,
};
