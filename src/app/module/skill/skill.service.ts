import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import Skill from "./skill.model";
import { TSkill } from "./skill.interface";

const createSkillIntoDB = async (payLoad: TSkill) => {
    const skill = await Skill.create(payLoad);
    return skill;
};

const getAllSkillFromDB = async () => {
    const skills = await Skill.find();
    return skills;
};

const updateSkillIntoDB = async (id: string, payLoad: Partial<TSkill>) => {
    const skill = await Skill.findByIdAndUpdate(id, payLoad, { new: true });

    if (!skill) {
        throw new AppError(httpStatus.NOT_FOUND, "Skill not found");
    }
    return skill;
};

const deleteSkillFromDB = async (id: string) => {
    const skill = await Skill.findByIdAndDelete(id);

    if (!skill) {
        throw new AppError(httpStatus.NOT_FOUND, "Skill not found");
    }
    return skill;
};

export const SkillServices = {
    createSkillIntoDB,
    getAllSkillFromDB,
    updateSkillIntoDB,
    deleteSkillFromDB,
};
