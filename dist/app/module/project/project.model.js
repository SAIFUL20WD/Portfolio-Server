"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    liveLink: { type: String, required: true },
    githubLink: {
        client: { type: String, required: true },
        server: { type: String },
    },
}, { versionKey: false });
const Project = (0, mongoose_1.model)("project", projectSchema);
exports.default = Project;
