import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TProject } from "./project.interface";
import Project from "./project.model";

const createProjectIntoDB = async (payLoad: TProject) => {
    const project = await Project.create(payLoad);
    return project;
};

const getAllProjectFromDB = async () => {
    const projects = await Project.find();
    return projects;
};

const getProjectByIdFromDB = async (id: string) => {
    const project = await Project.findById(id);
    return project;
};

const updateProjectIntoDB = async (id: string, payLoad: Partial<TProject>) => {
    const project = await Project.findByIdAndUpdate(id, payLoad, { new: true });

    if (!project) {
        throw new AppError(httpStatus.NOT_FOUND, "Project not found");
    }
    return project;
};

const deleteProjectFromDB = async (id: string) => {
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
        throw new AppError(httpStatus.NOT_FOUND, "Project not found");
    }
    return project;
};

export const ProjectServices = {
    createProjectIntoDB,
    getAllProjectFromDB,
    getProjectByIdFromDB,
    updateProjectIntoDB,
    deleteProjectFromDB,
};
