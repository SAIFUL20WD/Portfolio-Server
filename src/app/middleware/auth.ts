import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import AppError from "../errors/AppError";
import catchAsync from "../utils/catchAsync";

const auth = () => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
        }

        const decoded = jwt.verify(token, config.jwtSecretKey as string) as JwtPayload;
        req.user = decoded as JwtPayload;

        next();
    });
};

export default auth;
