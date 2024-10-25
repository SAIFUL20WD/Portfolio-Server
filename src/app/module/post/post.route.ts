import express from "express";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { postValidations } from "./post.validation";
import { PostControllers } from "./post.controller";

const router = express.Router();

router.post("/", auth(), validateRequest(postValidations.createPostValidationSchema), PostControllers.createPost);

router.get("/", PostControllers.getAllPost);

router.get("/:id", PostControllers.getPostById);

router.put("/:id", auth(), validateRequest(postValidations.updatePostValidationSchema), PostControllers.updatePost);

router.delete("/:id", auth(), PostControllers.deletePost);

export const PostRoutes = router;
