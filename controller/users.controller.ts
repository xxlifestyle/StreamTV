import { Request, Response} from "express";
import {usersService} from "../services/users.service";
import {getErrorMessage} from "../utils/users.utils";
import {IUser} from "../models/interfaces/users.interface";
import {mailerController} from "./mailer.controller";
import Mail from "nodemailer/lib/mailer";

class usersController {
    static async getUsers(req :Request, res :Response){
         const usersData = usersService.getUsers()
         return usersData
    }
    static async loginOne(req: Request, res: Response){
        try {
            const foundUser = await usersService.login(req.body);
            res.status(200).send(foundUser);
        } catch (error) {
            return res.status(500).send(getErrorMessage(error));
        }
    }
    static async registerOne(req :Request, res :Response){
        try {
            const data :IUser = await usersService.register(req.body);
            const mail  = await mailerController.sendRegisterData(data)
            res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(getErrorMessage(error));
        }
    }
}

export {usersController}