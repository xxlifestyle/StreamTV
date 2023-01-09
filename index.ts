import express, {Express, json} from "express"
import dotenv from "dotenv"
import {mainRouter} from "./routes";
import {DB_URL} from "./configs/data/db";
import * as mongoose from "mongoose";


dotenv.config()


const app :Express = express()
const PORT :PORT = process.env.PORT || 5050

app.use(json())
app.use('', mainRouter)

async function startServer(port :PORT) :Promise<void> {
    await mongoose.connect(DB_URL)
    app.listen(3000, ()=>{
        console.log(`Server has been started on PORT: ${port}`)
    })
}

startServer(PORT)