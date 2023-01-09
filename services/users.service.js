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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const users_model_1 = require("../models/users.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class usersService {
    static getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = yield users_model_1.User.find();
            return userData;
        });
    }
    static register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield users_model_1.User.create(user);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static login(user) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundUser = yield users_model_1.User.findOne({ username: user.username });
                if (!foundUser) {
                    throw new Error('Name of user is not correct');
                }
                const isMatch = bcrypt_1.default.compareSync(user.password, foundUser.password);
                if (isMatch) {
                    const token = jsonwebtoken_1.default.sign({ _id: (_a = foundUser._id) === null || _a === void 0 ? void 0 : _a.toString(), username: foundUser.username }, auth_1.SECRET_KEY, {
                        expiresIn: '2 days',
                    });
                    return { user: { _id: foundUser._id, username: foundUser.username }, token: token };
                }
                else {
                    throw new Error('Password is not correct');
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.usersService = usersService;
