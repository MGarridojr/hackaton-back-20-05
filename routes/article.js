import { Router } from "express";
import { postArticle, showArticle, showArticles } from "../controllers/articleControllers.js";
import { validateArticle } from "../middlewares/articleMiddlewares.js";


const articleRoute = Router()

articleRoute.post("/post", validateArticle, postArticle)
articleRoute.get("/home", showArticles)
articleRoute.get("/article/:id", showArticle)

export default articleRoute
