"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const post_validation_1 = require("./post.validation");
const post_controller_1 = require("./post.controller");
const router = express_1.default.Router();
router.post("/", (0, auth_1.default)(), (0, validateRequest_1.default)(post_validation_1.postValidations.createPostValidationSchema), post_controller_1.PostControllers.createPost);
router.get("/", post_controller_1.PostControllers.getAllPost);
router.get("/:id", post_controller_1.PostControllers.getPostById);
router.put("/:id", (0, auth_1.default)(), (0, validateRequest_1.default)(post_validation_1.postValidations.updatePostValidationSchema), post_controller_1.PostControllers.updatePost);
router.delete("/:id", (0, auth_1.default)(), post_controller_1.PostControllers.deletePost);
exports.PostRoutes = router;
