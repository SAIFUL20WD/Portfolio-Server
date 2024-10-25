import { z } from "zod";

const createProjectValidationSchema = z.object({
    image: z.string(),
    title: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    liveLink: z.string(),
    githubLink: z.object({
        client: z.string(),
        server: z.string().optional(),
    }),
});

const updateProjectValidationSchema = z.object({
    image: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    shortDescription: z.string().optional(),
    liveLink: z.string().optional(),
    githubLink: z
        .object({
            client: z.string().optional(),
            server: z.string().optional(),
        })
        .optional(),
});

export const projectValidations = {
    createProjectValidationSchema,
    updateProjectValidationSchema,
};
