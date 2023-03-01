import {NextFunction, Request, Response} from "express";

import {userService, postsService} from "../services";

export class UserController {
    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {login, password} = req.body;

            const user = await userService.addUser(login, password);

            res.send(user);
        } catch (e: any) {
            next(e)
        }
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {login, password} = req.body;

            const user = await userService.loginUser(login, password);

            res.send(user);
        } catch (e: any) {
            next(e)
        }
    }

    createPost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {userId} = req.params
            const {topic, text} = req.body;

            const post = await postsService.createPost(userId, topic, text);

            res.send(post);
        } catch (e: any) {
            next(e)
        }
    }

    // updatePost = async (req: Request, res: Response) => {
    //     const {postId, topic, text} = req.body;
    //
    //     const serviceResponse: IPost | string = await appService.updatePost(+postId, topic, text);
    //
    //     res.send(serviceResponse);
    // }
    //
    // deletePost = async (req: Request, res: Response) => {
    //     const {id} = req.params;
    //
    //     const serviceResponse: string | void = await appService.deletePost(+id);
    //
    //     res.send(serviceResponse);
    // }

    getPosts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {userId} = req.params
            const {take, skip} = req.query;

            const post = await postsService.getPosts(userId, Number(take), Number(skip));

            res.send(post);
        } catch (e: any) {
            next(e)
        }
    }
}

export const userController = new UserController();

