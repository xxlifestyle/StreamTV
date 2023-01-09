import {Schema, model} from "mongoose"
import {IUser} from "./interfaces/users.interface";
import bcrypt from "bcrypt"

const userSchema = new Schema<IUser>({
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        avatar: {type: String}
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

const User = model<IUser>('Users', userSchema);

export {User}