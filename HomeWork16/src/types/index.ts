export interface IUser {
    id: number;
    login: string;
    password: string;
    isAdmin: boolean;
}

export interface IPost {
    id: number;
    userId: number;
    topic?: string;
    text?: string;
}

export interface IPaginationPosts {
    total: number;
    data: IPost[];
}

export interface IDataBase {
    users: IUser[];
    posts: IPost[];
}