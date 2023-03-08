import {User, UserModel} from "../models";
import {HttpError} from "../common/errors";

export class UserService {
    async addUser(
        params: User,
    ): Promise<User> {
        const {login} = params;

        const existUser = await UserModel.findOne({login});

        if (existUser) {
            throw new HttpError(409, "User with that login already exist", "UserService");
        }

        return UserModel.create({...params});
    }

    async loginUser(
        login: string,
        password: string
    ): Promise<User> {
        const authUser = await UserModel.findOne({login, password});

        if (authUser) {
            return authUser;
        }

        throw new HttpError(404, "User not exist", "UserService");
    }
}

export const userService = new UserService();