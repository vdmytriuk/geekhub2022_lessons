import {NextFunction, Request, Response} from "express";

import {postsService} from "../services";

export class PostsController {
    updatePost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {postId} = req.params;
            const {topic, text} = req.body;

            const serviceResponse = await postsService.updatePost(postId, topic, text);

            res.send(serviceResponse);
        } catch (e: any) {
            next(e)
        }
    }

    deletePost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {postId} = req.params;

            const serviceResponse = await postsService.deletePost(postId);

            res.send(serviceResponse);
        } catch (e: any) {
            next(e)
        }
    }
}

export const postsController = new PostsController();