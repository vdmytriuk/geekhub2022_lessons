import express from "express";
import bodyParser from "body-parser";

import {appController} from "./controllers";


export class App {
    app = express();
    port = 8080;

    useRoutes() {
        this.app.use("/api", appController.router)
    }

    useMiddleWares() {
        this.app.use(bodyParser.urlencoded({extended: true}))
    }

    async init() {
        this.useMiddleWares();
        this.useRoutes();
        this.app.listen(this.port, () => {
            console.log(`Server starts at port: ${this.port}`)
        })
    }
}


(async () => {
   const app = new App();
   await app.init();
})()