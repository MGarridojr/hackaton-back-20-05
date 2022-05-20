import express, {json} from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import chalk from 'chalk'
import articleRoute from "./routes/article.js"


//express 
const app = express()
app.use(cors())
app.use(json())

//dotenv 
dotenv.config()

//route
app.use(articleRoute)

const port = process.env.PORT
app.listen(port, () => {
    console.log(chalk.bold.green(`Server is running on port ${port}.`))
})
