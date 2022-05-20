import Joi from "joi";


export const articleSchema = Joi.object({
    name: Joi.string().required(),
    articleName: Joi.string().required(),
    description: Joi.string().required(),
    article: Joi.string().required()
})