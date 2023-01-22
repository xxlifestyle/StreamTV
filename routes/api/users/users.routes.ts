import {Request, Response, Router} from "express"
import {usersController} from "../../../controller/users.controller";
import {auth} from "../../../middleware/auth";

const usersRouter :Router = Router()


usersRouter.get("/", auth, usersController.getUsers)
usersRouter.post("/confitm-email", auth, usersController.getUsers)

export {usersRouter}