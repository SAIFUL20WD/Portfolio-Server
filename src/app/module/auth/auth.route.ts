import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { AuthControllers } from "./auth.controller";
import loginValidationSchema, { contactValidationSchema } from "./auth.validation";

const router = express.Router();

router.post("/login", validateRequest(loginValidationSchema), AuthControllers.loginUser);

router.post("/contact", validateRequest(contactValidationSchema), AuthControllers.saveMessage);

export const AuthRoutes = router;
