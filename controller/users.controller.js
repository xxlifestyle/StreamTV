"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const users_service_1 = require("../services/users.service");
const users_utils_1 = require("../utils/users.utils");
class usersController {
    static getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersData = users_service_1.usersService.getUsers();
            return usersData;
        });
    }
    static loginOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundUser = yield users_service_1.usersService.login(req.body);
                res.status(200).send(foundUser);
            }
            catch (error) {
                return res.status(500).send((0, users_utils_1.getErrorMessage)(error));
            }
        });
    }
    static registerOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield users_service_1.usersService.register(req.body);
                res.status(200).send('Inserted successfully');
            }
            catch (error) {
                return res.status(500).send((0, users_utils_1.getErrorMessage)(error));
            }
        });
    }
}
exports.usersController = usersController;
