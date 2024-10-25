import express from "express";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { skillValidations } from "./skill.validation";
import { SkillControllers } from "./skill.controller";

const router = express.Router();

router.post("/", auth(), validateRequest(skillValidations.createSkillValidationSchema), SkillControllers.createSkill);

router.get("/", SkillControllers.getAllSkills);

// router.get("/:id", SkillControllers.getSkillById);

router.put("/:id", auth(), validateRequest(skillValidations.updateSkillValidationSchema), SkillControllers.updateSkill);

router.delete("/:id", auth(), SkillControllers.deleteSkill);

export const SkillRoutes = router;
