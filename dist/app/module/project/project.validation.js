"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidations = void 0;
const zod_1 = require("zod");
const createProjectValidationSchema = zod_1.z.object({
    image: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    shortDescription: zod_1.z.string(),
    liveLink: zod_1.z.string(),
    githubLink: zod_1.z.object({
        client: zod_1.z.string(),
        server: zod_1.z.string().optional(),
    }),
});
const updateProjectValidationSchema = zod_1.z.object({
    image: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    shortDescription: zod_1.z.string().optional(),
    liveLink: zod_1.z.string().optional(),
    githubLink: zod_1.z
        .object({
        client: zod_1.z.string().optional(),
        server: zod_1.z.string().optional(),
    })
        .optional(),
});
exports.projectValidations = {
    createProjectValidationSchema,
    updateProjectValidationSchema,
};
