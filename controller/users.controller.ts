import { Request, Response} from "express";
import {usersService} from "../services/users.service";
import {getErrorMessage} from "../utils/users.utils";

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
            await usersService.register(req.body);
            res.status(200).send('Inserted successfully');
        } catch (error) {
            return res.status(500).send(getErrorMessage(error));
        }
    }
}

export {usersController}