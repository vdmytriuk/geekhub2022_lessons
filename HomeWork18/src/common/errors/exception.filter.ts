import {IExceptionFilter} from "../../types";
import {HttpError} from "./http.error";
import {NextFunction, Request, Response} from "express";
import {ValidationError} from "./validation.error";
import {Logger} from "tslog";


export class ExceptionFilter implements IExceptionFilter {
    readonly logger = new Logger();

    catch(err: Error | HttpError,
          req: Request,
          res: Response,
          next: NextFunction): void {
        if (err instanceof HttpError) {
            this.logger.warn(`Context: ${err.context}, Error [${err.statusCode}]: ${err.message}`);

            res.status(err.statusCode).send({
                statusCode: err.statusCode,
                errorMessage: err.message
            });

            return;
        }

        if (err instanceof ValidationError) {
            this.logger.warn(`Validation Error`);

            res.status(422).send({
                statusCode: 422,
                errors: [...err.validationErrors]
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