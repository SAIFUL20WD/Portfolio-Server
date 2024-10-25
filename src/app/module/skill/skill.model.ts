import { Schema, model } from "mongoose";
import { TSkill } from "./skill.interface";

const skillSchema = new Schema<TSkill>(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
    },
    { versionKey: false },
);

const Skill = model<TSkill>("skill", skillSchema);

export default Skill;
