import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import createToken from "./auth.util";
import config from "../../config";
import User, { ContactMessage } from "./auth.model";

const LoginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "No user exists with given email");
    }

    const passwordMatched = password === user?.password ? true : false;
    if (!passwordMatched) {
        throw new AppError(httpStatus.FORBIDDEN, "Password does not match!");
    }

    const jwtPayload = { _id: user._id, name: user.name, email: user.email };

    const token = createToken(jwtPayload, config.jwtSecretKey as string, config.jwtExpiresIn as string);

    user.password = "";

    return { user, token };
};

const saveMessageIntoDB = async (payload: { name: string; email: string; message: string }) => {
    const message = await ContactMessage.create(payload);

    return message;
};

export const AuthServices = {
    LoginUser,
    saveMessageIntoDB,
};
