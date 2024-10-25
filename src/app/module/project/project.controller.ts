import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const createProject = catchAsync(async (req, res) => {
    const result = await ProjectServices.createProjectIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Project added successfully",
        data: result,
    });
});

const getAllProjects = catchAsync(async (req, res) => {
    const result = await ProjectServices.getAllProjectFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Projects retrieved successfully",
        data: result,
    });
});

const getProjectById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectServices.getProjectByIdFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Single Project retrieved successfully",
        data: result,
    });
});

const updateProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectServices.updateProjectIntoDB(id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Project updated successfully",
        data: result,
    });
});

const deleteProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectServices.deleteProjectFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Project deleted successfully",
        data: result,
    });
});

export const ProjectControllers = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
};
