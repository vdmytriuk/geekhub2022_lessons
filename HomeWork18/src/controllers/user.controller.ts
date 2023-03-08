import {Request, Response} from "express";

import {BaseController} from "../common/abstract/base.controller";
import {userService, postsService} from "../services";
import {
    loginUserBodySchema,
    postBodySchema,
    postCreateParamsSchema,
    registerUserBodySchema
} from "../common/validation";

export class UserController extends BaseController {
    constructor() {
        super();

        this.bindRoutes([
            {
                method: "post",
                path: '/register',
                handler: this.register,
                validators: {
                    body: registerUserBodySchema
                }
            },
            {
                method: "post",
                path: '/login',
                handler: this.login,
                validators: {
                    body: loginUserBodySchema
                }
            },
            {
                method: "post",
                path: '/:userId/posts',
                handler: this.createPost,
                validators: {
                    body: postBodySchema,
                    params: postCreateParamsSchema
                }
            },
            {
                method: "get",
                path: '/:userId/posts',
                handler: this.getPosts
            },
        ])
    }

    register = async (req: Request, res: Response) => {
        const user = await userService.addUser(req.body);

        res.send(user);
    }

    login = async (req: Request, res: Response) => {
        const {login, password} = req.body;

        const user = await userService.loginUser(login, password);

        res.send(user);
    }

    createPost = async (req: Request, res: Response) => {
        const {userId} = req.params
        const {topic, text} = req.body;

        const post = await postsService.createPost(userId, topic, text);

        res.send(post);
    }

    getPosts = async (req: Request, res: Response) => {
        const {userId} = req.params
        const {take, skip} = req.query;

        const post = await postsService.getPosts(userId, Number(take), Number(skip));

        res.send(post);
    }
}

export const userController = new UserController();

