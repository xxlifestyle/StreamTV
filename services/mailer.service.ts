import {IUser} from "../models/interfaces/users.interface";
import mongoose from "mongoose";
import nodemailer, {Transporter} from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import {decryptDataAES, encryptDataAES} from "../utils/crypto.utils";


class MailerService{

    private static transporter: Transporter = nodemailer.createTransport({
        service: 'Yandex',
        auth: {
            user: "streamtvtv@yandex.ru", // generated ethereal user
            pass: "zjuvvxzutejzusvj", // generated ethereal password
        },
    });
    static async sendUserDataViaEmail(user  :mongoose.DocumentDefinition<IUser>) {
        try {
            const stringUserData :string = JSON.stringify({username: user.username, timestamp: new Date(), email: user.email})
            const confirm_link :string = encryptDataAES( stringUserData)
            const encodedConfirmLink :string = decryptDataAES( confirm_link)
            let info :Mail = await this.transporter.sendMail({
                from: '"Stream TV" <streamtvtv@yandex.ru>', // sender address
                to: user.email, // list of receivers
                subject: "New User on StreamTV!", // Subject line
                text: "Welcome to out platform", // plain text body
                html: `
                        <b>Username</b>: ${user.username} <br>
                        <b>Key: ${confirm_link}</b> <br>
                        <b>encoded key: ${encodedConfirmLink}</b> <br>
                        <a href="https://confirm-link.com/auth/confirm?key=" + ${confirm_link} >Confirm Link</a>`, // html body
            });
            console.log(info)
            return info

        } catch (e) {

        }
    }
}
export {MailerService}