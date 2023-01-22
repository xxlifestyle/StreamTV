import {IUser} from "../models/interfaces/users.interface";
import {MailerService} from "../services/mailer.service";
import Mail from "nodemailer/lib/mailer";
import { DocumentDefinition } from "mongoose";
import {IMail} from "../models/interfaces/mail.interface";

class mailerController {
    static async sendRegisterData(user: IUser ){
        try {
            const mail : Mail | undefined = await MailerService.sendUserDataViaEmail(user)

            return mail
        } catch (e) {
            console.error(e)
        }
    }

}

export {mailerController}