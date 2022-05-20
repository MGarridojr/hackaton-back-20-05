import { articleSchema } from "../schemas/articleSchemas.js";


export function validateArticle(req, res, next){
    const { error } = articleSchema.validate(req.body)
    if(error){
        console.log("Erro de validação")
        return res.sendStatus(422)
    }
    next()
}