import express from "express";
import bodyParser from "body-parser";

import appRouter from './routes';
import * as mongoose from "mongoose";
import {exceptionFilter} from "./common/errors/exception.filter";


export class App {
    app = express();
    port = 8080;

    useRoutes() {
        this.app.use("/api", appRouter)
    }

    useMiddleWares() {
        this.app.use(bodyParser.urlencoded({extended: true}))
    }

    async initDb() {
        await mongoose.connect("mongodb://localhost:27017/homework17");
    }

    async init() {
        this.useMiddleWares();
        this.useRoutes();
        await this.initDb();

        this.app.use(exceptionFilter.catch.bind(exceptionFilter));
        this.app.listen(this.port, () => {
            console.log(`Server starts at port: ${this.port}`)
        });

        process.on('uncaughtException', (err: Error) => {
           console.log('Uncaught error', err.message);
        });

        process.on('unhandledRejection', (err: Error) => {
            console.log('Uncaught async error', err.message);
        });
    }
}


(async () => {
   const app = new App();
   await app.init();
})()