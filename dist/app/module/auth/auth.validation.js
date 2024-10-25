"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactValidationSchema = void 0;
const zod_1 = require("zod");
const loginValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
exports.contactValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    message: zod_1.z.string(),
});
exports.default = loginValidationSchema;
