import express from "express";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { projectValidations } from "./project.validation";
import { ProjectControllers } from "./project.controller";

const router = express.Router();

router.post(
    "/",
    auth(),
    validateRequest(projectValidations.createProjectValidationSchema),
    ProjectControllers.createProject,
);

router.get("/", ProjectControllers.getAllProjects);

router.get("/:id", ProjectControllers.getProjectById);

router.put(
    "/:id",
    auth(),
    validateRequest(projectValidations.updateProjectValidationSchema),
    ProjectControllers.updateProject,
);

router.delete("/:id", auth(), ProjectControllers.deleteProject);

export const ProjectRoutes = router;
