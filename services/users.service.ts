import {User} from "../models/users.model";
import {IUser} from "../models/interfaces/users.interface";
import * as mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET_KEY} from "../middleware/auth";
import {generatePass} from "../utils/auth.utils";
import {usersController} from "../controller/users.controller";
import {mailerController} from "../controller/mailer.controller";

class usersService{
   static async getUsers()  {
        const userData  = await User.find()
        return userData
    }
    static async register(user: mongoose.DocumentDefinition<IUser>) :Promise<IUser> {
        try {
            let newUser = await User.create({...user, password:generatePass(5)});

            return newUser
        } catch (error) {
            throw error;
        }
    }
    static async login(user  :mongoose.DocumentDefinition<IUser>) {
        try {
            const foundUser = await User.findOne({ username: user.username });
            if (!foundUser) {
                throw new Error('Name of user is not correct');
            }

            const isMatch = bcrypt.compareSync(user.password, foundUser.password);

            if (isMatch) {
                const token = jwt.sign({ _id: foundUser._id?.toString(), username: foundUser.username }, SECRET_KEY, {
                    expiresIn: '2 days',
                });
                return { user: { _id: foundUser._id, username:foundUser.username }, token: token };

            } else {
                throw new Error('Password is not correct');
            }

        } catch (error) {
            throw error;
        }
    }
}

export {usersService}