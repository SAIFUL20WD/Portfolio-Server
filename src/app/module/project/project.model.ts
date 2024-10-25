import { Schema, model } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
    {
        image: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        shortDescription: { type: String, required: true },
        liveLink: { type: String, required: true },
        githubLink: {
            client: { type: String, required: true },
            server: { type: String },
        },
    },
    { versionKey: false },
);

const Project = model<TProject>("project", projectSchema);

export default Project;
