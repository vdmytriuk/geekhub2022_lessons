import express, {Request, Response} from "express";
import {appService} from "../services";
import {IPost} from "../types";

export class AppController {
    router = express.Router();

    constructor() {
        this.router.post('/register', this.register);
        this.router.post('/login', this.login);
        this.router.post('/posts', this.createPost);
        this.router.get('/posts', this.getPosts);
        this.router.patch('/posts', this.updatePost);
        this.router.delete('/posts/:id', this.deletePost);
    }

    register = async (req: Request, res: Response) => {
        const {login, password} = req.body;

        const user = await appService.addUser(login, password);

        res.send(user);
    }

    login = async (req: Request, res: Response) => {
        const {login, password} = req.body;

        const user = await appService.loginUser(login, password);

        res.send(user);
    }

    createPost = async (req: Request, res: Response) => {
        const {userId, topic, text} = req.body;

        const post: IPost = await appService.createPost(+userId, topic, text);

        res.send(post);
    }

    updatePost = async (req: Request, res: Response) => {
        const {postId, topic, text} = req.body;

        const serviceResponse: IPost | string = await appService.updatePost(+postId, topic, text);

        res.send(serviceResponse);
    }

    deletePost = async (req: Request, res: Response) => {
        const {id} = req.params;

        const serviceResponse: string | void = await appService.deletePost(+id);

        res.send(serviceResponse);
    }

    getPosts = async (req: Request, res: Response) => {
        const {userId, take, skip} = req.query;

        const post = await appService.getPosts(Number(userId), Number(take), Number(skip));

        res.send(post);
    }
}

export const appController = new AppController();

