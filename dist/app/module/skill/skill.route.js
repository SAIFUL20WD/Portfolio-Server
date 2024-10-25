"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const skill_validation_1 = require("./skill.validation");
const skill_controller_1 = require("./skill.controller");
const router = express_1.default.Router();
router.post("/", (0, auth_1.default)(), (0, validateRequest_1.default)(skill_validation_1.skillValidations.createSkillValidationSchema), skill_controller_1.SkillControllers.createSkill);
router.get("/", skill_controller_1.SkillControllers.getAllSkills);
// router.get("/:id", SkillControllers.getSkillById);
router.put("/:id", (0, auth_1.default)(), (0, validateRequest_1.default)(skill_validation_1.skillValidations.updateSkillValidationSchema), skill_controller_1.SkillControllers.updateSkill);
router.delete("/:id", (0, auth_1.default)(), skill_controller_1.SkillControllers.deleteSkill);
exports.SkillRoutes = router;
