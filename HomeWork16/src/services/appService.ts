import {IDataBase, IPaginationPosts, IPost, IUser} from "../types";

export class AppService {
    private db: IDataBase = {
        users: [],
        posts: [],
    };
    private userIdCounter: number = 1;

    async addUser(
        login: string,
        password: string,
        isAdmin: boolean = false
    ): Promise<IUser> {
        const user: IUser = {
            id: this.userIdCounter,
            login,
            password,
            isAdmin
        }

        const existUser: IUser | undefined = this.db.users.find(usr => usr.login === login);

        if (existUser) {
            return existUser;
        }

        this.db.users.push(user);
        this.userIdCounter++;

        return user;
    }

    async loginUser(
        login: string,
        password: string
    ): Promise<IUser | string> {
        const existUser: IUser | undefined = this.db.users.find(usr => usr.login === login);

        if (existUser) {
            if (existUser.password === password) {
                return existUser;
            }

            return "Password not match";
        }

        return "User not exist";
    }

    async createPost(
        userId: number,
        topic: string,
        text: string
    ): Promise<IPost> {
        const post: IPost = {
            id: Date.now(),
            userId,
            topic,
            text
        }

        this.db.posts.push(post)

        return post;
    }

    async updatePost(
        id: number,
        topic?: string,
        text?: string
    ): Promise<IPost | string> {
        const existPost: IPost | undefined = this.db.posts.find(post => post.id === id);

        if (existPost) {
            if (topic) {
                existPost.topic = topic;
            }

            if (text) {
                existPost.text = text;
            }

            this.db.posts = this.db.posts.filter(post => post.id !== existPost.id).concat(existPost);

            return existPost;
        }

        return "Post with this id is not exist";
    }

    async deletePost(
        id: number
    ): Promise<void | string> {
        const targetPost: IPost | undefined = this.db.posts.find(post => post.id === id);

        if (targetPost) {
            this.db.posts = this.db.posts.filter(post => post.id !== targetPost.id)

            return;
        }

        return "Post with this id is not exist";
    }

    async getPosts(
        userId: number,
        take: number,
        skip: number
    ): Promise<IPaginationPosts | string> {
        const userPosts: IPost[] = this.db.posts.filter(post => post.userId === userId);
        const {length} = userPosts;

        if (length <= skip || length === 0) {
            return "No enough posts"
        }

        const targetPosts = userPosts.slice(skip).slice(0, take);

        return {
            total: targetPosts.length,
            data: targetPosts
        };
    }
}

export const appService = new AppService();