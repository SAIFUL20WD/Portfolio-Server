import { z } from "zod";

const loginValidationSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const contactValidationSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
});

export default loginValidationSchema;
