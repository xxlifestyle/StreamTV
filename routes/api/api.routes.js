"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const users_routes_1 = require("./users/users.routes");
const apiRouter = (0, express_1.Router)();
exports.apiRouter = apiRouter;
apiRouter.use('/users', users_routes_1.usersRouter);
apiRouter.get("/", (req, res) => {
    res.send("Hello Api!");
});
