import {Post, PostModel} from "../models";
import {Types} from "mongoose";
import {IPaginationPosts} from "../types";
import {HttpError} from "../common/errors";

export class PostsService {
    async createPost(
        userId: string,
        topic?: string,
        text?: string
    ): Promise<Post> {
        return PostModel.create({topic, text, userId: new Types.ObjectId(userId)});
    }

    async getPosts(
        userId: string,
        take: number = 10,
        skip: number = 0
    ): Promise<IPaginationPosts> {
        const userPosts: Post[] = await PostModel.find({userId}).skip(skip).limit(take);

        const {length} = userPosts;

        if (length === 0) {
            throw new HttpError(404, "No enough posts", "PostsService");
        }

        return {
            total: length,
            data: userPosts
        };
    }

    async updatePost(
        postId: string,
        topic?: string,
        text?: string
    ): Promise<Post> {
        const post = await PostModel.findByIdAndUpdate(postId, {$set: {topic, text}}, {new:true})

        if (!post) {
            throw new HttpError(404, "Post not exist", "PostsService");
        }

        return post;
    }

    async deletePost(
        postId: string
    ): Promise<Post> {
        const post = await PostModel.findByIdAndDelete(postId);

        if (!post) {
            throw new HttpError(404, "Post not exist", "PostsService");
        }

        return post;
    }
}

export const postsService = new PostsService();