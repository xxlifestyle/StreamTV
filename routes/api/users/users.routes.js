"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_controller_1 = require("../../../controller/users.controller");
const auth_1 = require("../../../middleware/auth");
const usersRouter = (0, express_1.Router)();
exports.usersRouter = usersRouter;
usersRouter.get("/", auth_1.auth, users_controller_1.usersController.getUsers);
