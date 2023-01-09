"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const users_controller_1 = require("../../controller/users.controller");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post("/login", users_controller_1.usersController.loginOne);
authRouter.post("/register", users_controller_1.usersController.registerOne);
