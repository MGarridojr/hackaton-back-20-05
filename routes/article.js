import { Router } from "express";
import { postArticle } from "../controllers/articleControllers.js";
import { validateArticle } from "../middlewares/articleMiddlewares.js";


const articleRoute = Router()

articleRoute.post("/post", validateArticle, postArticle)

export default articleRoute
