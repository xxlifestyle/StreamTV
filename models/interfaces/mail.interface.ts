import * as mongoose from "mongoose";

export  interface IMail extends mongoose.Document{
    from: string, // sender address
    to: string, // list of receivers
    subject: string, // Subject line
    text: string, // plain text body
    html: string
}
