import * as mongoose from "mongoose";

export  interface IUser extends mongoose.Document{
    username: string;
    password: string;
    avatar?: string
}
