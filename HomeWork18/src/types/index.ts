import {HttpError} from "../common/errors";
import {NextFunction, Request, Response, Router} from "express";
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

export interface IControllerRoute {
    path: string;
    method: keyof Pick<Router, "get" | "post" | "delete" | "patch" | "put">
    handler: (req: Request, res: Response, next: NextFunction) => void;
    validators?: Validation;
}

export type Validation = Record<string, any>;