import db from "../db.js";


export async function postArticle(req, res){
    try{
        await db.collection("articles").insertOne(req.body)
        return res.sendStatus(201)
    }
    catch{
        return res.sendStatus(500)
    }
}