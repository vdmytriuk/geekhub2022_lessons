import {getModelForClass, modelOptions, prop, Severity} from "@typegoose/typegoose";
import {Types} from "mongoose";

@modelOptions({
    schemaOptions: {
        versionKey: false,
        timestamps: true,
    },
    options: {
        allowMixed: Severity.ALLOW
    }
})
export class User {
    @prop({id: true})
    id!: Types.ObjectId;

    @prop({required: true})
    login!: string;

    @prop({required: true})
    password!: string;

    @prop({required: false, default: false})
    isAdmin?: boolean;

    @prop({required: true})
    email!: string;

    @prop({required: false})
    avatar?: string;

    @prop({required: false})
    firstName?: string;

    @prop({required: false})
    lastName?: string;

    @prop({required: false})
    socials?: {
        facebook?: string,
        instagram?: string,
        twitter?: string,
    };

    @prop({required: true})
    age!: number;

    @prop({required: false, default: []})
    interests?: string[];

    @prop({required: true})
    address1!: string;

    @prop({required: false})
    address2?: string;

    @prop({required: true})
    postIndex?: number;
}

export const UserModel = getModelForClass(User);