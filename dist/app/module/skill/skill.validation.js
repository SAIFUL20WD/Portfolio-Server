"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillValidations = void 0;
const zod_1 = require("zod");
const createSkillValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    image: zod_1.z.string(),
});
const updateSkillValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
});
exports.skillValidations = {
    createSkillValidationSchema,
    updateSkillValidationSchema,
};
