import * as mongoose from "mongoose";

export  interface IUser extends mongoose.Document{
    username: string;
    email: string;
    password: string;
    stream_key?:string;
    is_confirmed: boolean;
    confirm_code?:string;
    avatar?: string
}
