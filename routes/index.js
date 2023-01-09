"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const auth_routes_1 = require("./auth/auth.routes");
const api_routes_1 = require("./api/api.routes");
const passport_1 = __importDefault(require("passport"));
const passport_http_bearer_1 = require("passport-http-bearer");
const users_model_1 = require("../models/users.model");
const mainRouter = (0, express_1.Router)();
exports.mainRouter = mainRouter;
mainRouter.use('/auth', auth_routes_1.authRouter);
mainRouter.use('/api', api_routes_1.apiRouter);
passport_1.default.use(new passport_http_bearer_1.Strategy(function (token, done) {
    users_model_1.User.findOne({ token: token }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        return done(null, user, { scope: 'all' });
    });
}));
mainRouter.get("/", (req, res) => {
    res.send("Hello World!");
});
