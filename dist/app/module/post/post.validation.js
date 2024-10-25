"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postValidations = void 0;
const zod_1 = require("zod");
const createPostValidationSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    image: zod_1.z.string(),
    category: zod_1.z.string().optional(),
    comment: zod_1.z.string().optional(),
    tag: zod_1.z.array(zod_1.z.string()).optional(),
});
const updatePostValidationSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    category: zod_1.z.string().optional(),
    comment: zod_1.z.string().optional(),
    tag: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.postValidations = { createPostValidationSchema, updatePostValidationSchema };
