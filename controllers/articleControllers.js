import { ObjectId } from "mongodb";
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

export async function showArticle(req, res){
    const { id } = req.params
    try{
        const article = await db.collection("articles").find({
            _id: new ObjectId(id) 
        }).toArray()
        return res.send(article)
    } catch{
        return res.sendStatus(404)
    }
}
