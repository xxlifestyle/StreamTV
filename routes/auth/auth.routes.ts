import {Request, Response, Router} from "express"
import {usersController} from "../../controller/users.controller";

const authRouter :Router = Router()

authRouter.post("/login", usersController.loginOne)
authRouter.post("/register", usersController.registerOne)

export {authRouter}
