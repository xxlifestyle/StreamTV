import {Request, Response, Router} from "express"
import {usersRouter} from "./users/users.routes";

const apiRouter :Router = Router()

apiRouter.use('/users', usersRouter)

apiRouter.get("/", (req :Request, res:Response)=>{
    res.send("Hello Api!")
})

export {apiRouter}