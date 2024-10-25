"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const project_model_1 = __importDefault(require("./project.model"));
const createProjectIntoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield project_model_1.default.create(payLoad);
    return project;
});
const getAllProjectFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield project_model_1.default.find();
    return projects;
});
const getProjectByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield project_model_1.default.findById(id);
    return project;
});
const updateProjectIntoDB = (id, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield project_model_1.default.findByIdAndUpdate(id, payLoad, { new: true });
    if (!project) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Project not found");
    }
    return project;
});
const deleteProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield project_model_1.default.findByIdAndDelete(id);
    if (!project) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Project not found");
    }
    return project;
});
exports.ProjectServices = {
    createProjectIntoDB,
    getAllProjectFromDB,
    getProjectByIdFromDB,
    updateProjectIntoDB,
    deleteProjectFromDB,
};
