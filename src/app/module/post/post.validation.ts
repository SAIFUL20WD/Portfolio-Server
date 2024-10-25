import { z } from "zod";

const createPostValidationSchema = z.object({
    title: z.string(),
    content: z.string(),
    image: z.string(),
    category: z.string().optional(),
    comment: z.string().optional(),
    tag: z.array(z.string()).optional(),
});

const updatePostValidationSchema = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    comment: z.string().optional(),
    tag: z.array(z.string()).optional(),
});

export const postValidations = { createPostValidationSchema, updatePostValidationSchema };
