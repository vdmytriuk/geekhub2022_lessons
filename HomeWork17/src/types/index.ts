import {HttpError} from "../common/errors";
import {NextFunction, Request, Response} from "express";
import {Post} from "../models";

export interface IPaginationPosts {
    total: number;
    data: Post[];
}

export interface IExceptionFilter {
    catch(
        err: Error | HttpError,
        req: Request,
        res: Response,
        next: NextFunction
    ): void;
}