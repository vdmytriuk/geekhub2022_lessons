import {Request, Response} from "express";

import {BaseController} from "../common/abstract/base.controller";

import {postsService} from "../services";
import {postBodySchema, postUpdateParamsSchema} from "../common/validation";

export class PostsController extends BaseController {
    constructor() {
        super();

        this.bindRoutes([
            {
                method: "patch",
                path: "/:postId",
                handler: this.updatePost,
                validators: {
                    body: postBodySchema,
                    params: postUpdateParamsSchema
                }
            },
            {
                method: "delete",
                path: "/:postId",
                handler: this.deletePost,
                validators: {
                    params: postUpdateParamsSchema
                }
            },
        ])
    }

    updatePost = async (req: Request, res: Response) => {
        const {postId} = req.params;
        const {topic, text} = req.body;

        const serviceResponse = await postsService.updatePost(postId, topic, text);

        res.send(serviceResponse);
    }

    deletePost = async (req: Request, res: Response) => {
        const {postId} = req.params;

        const serviceResponse = await postsService.deletePost(postId);

        res.send(serviceResponse);
    }
}

export const postsController = new PostsController();