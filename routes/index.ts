import {Router, Request, Response} from "express";
import {authRouter} from "./auth/auth.routes";
import {apiRouter} from "./api/api.routes";
import passport from "passport"
import { Strategy as BearerStrategy } from "passport-http-bearer";
import {User} from "../models/users.model";
import {IUser} from "../models/interfaces/users.interface";


const mainRouter :Router = Router()

mainRouter.use('/auth', authRouter)
mainRouter.use('/api', apiRouter)
passport.use(new BearerStrategy(
    function(token, done) {
        User.findOne({ token: token }, function (err :Error, user:IUser) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user, { scope: 'all' });
        });
    }
));

mainRouter.get("/", (req :Request, res:Response)=>{
    res.send("Hello World!")
})

export {mainRouter}