import Joi from "joi";

export const registerUserBodySchema = Joi.object({
    login: Joi.string().min(3).max(255).required(),
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
    email: Joi.string().min(3).max(255).email().required(),
    avatar: Joi.string().min(3).max(255),
    firstName: Joi.string().min(3).max(255),
    lastName: Joi.string().min(3).max(255),
    socials: Joi.object({
        facebook: Joi.string().min(3).max(255),
        instagram: Joi.string().min(3).max(255),
        twitter: Joi.string().min(3).max(255),
    }),
    age: Joi.number().min(18).max(150).required(),
    interests: Joi.array<string[]>(),
    address1: Joi.string().min(10).max(255).required(),
    address2: Joi.string().min(10).max(255),
    postIndex: Joi.string().length(6).pattern(/^[0-9]+$/).required(),
})

export const loginUserBodySchema = Joi.object({
    login: Joi.string().min(3).max(255).required(),
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
});

export const postBodySchema = Joi.object({
    topic: Joi.string().min(10).max(64).required(),
    text: Joi.string().min(10).max(1000).required(),
})

export const postCreateParamsSchema = Joi.object({
    userId: Joi.string().required(),
})

export const postUpdateParamsSchema = Joi.object({
    postId: Joi.string().required(),
})