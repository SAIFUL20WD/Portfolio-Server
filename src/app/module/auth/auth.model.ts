import { Schema, model } from "mongoose";
import { TUser } from "./auth.interface";

const userSchema = new Schema<TUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
        toJSON: {
            transform(doc, ret) {
                delete ret.password;
            },
        },
    },
);

const contactMessageSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

const User = model<TUser>("user", userSchema);
export const ContactMessage = model("contactMessage", contactMessageSchema);

export default User;
