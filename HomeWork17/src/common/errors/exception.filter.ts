import {IExceptionFilter} from "../../types";
import {HttpError} from "./http.error";
import {NextFunction, Request, Response} from "express";


export class ExceptionFilter implements IExceptionFilter {
    catch(err: Error | HttpError,
          req: Request,
          res: Response,
          next: NextFunction): void {
        if (err instanceof HttpError) {
            console.log(`Context: ${err.context}, Error [${err.statusCode}]: ${err.message}`);

            res.status(err.statusCode).send({
                statusCode: err.statusCode,
                errorMessage: err.message
            });

            return;
        }

        res.status(500).send({
            statusCode: 500,
            errorMessage: err.message
        })
    }
}

export const exceptionFilter = new ExceptionFilter();