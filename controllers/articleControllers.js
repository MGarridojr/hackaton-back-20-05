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

export async function showArticles(req, res){
    try{
        const articles = await db.collection("articles").find().toArray()
        return res.send(articles)
    }
    catch{
        return res.sendStatus(500)
    }
}