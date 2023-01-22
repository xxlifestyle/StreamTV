import {Schema, model} from "mongoose"
import {IUser} from "./interfaces/users.interface";
import bcrypt from "bcrypt"
import shortid from "shortid"
import {mailerController} from "../controller/mailer.controller";


const userSchema = new Schema<IUser>({
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, },
        avatar: {type: String},
        stream_key:{type: String}
    }
)
const saltRounds = 8

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, saltRounds);
    }
    next();
});


userSchema.methods.generateStreamKey = () :string => {
    return shortid.generate()
}

const User = model<IUser>('Users', userSchema);

export {User}