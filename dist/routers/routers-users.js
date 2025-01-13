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
const express_1 = __importDefault(require("express"));
const controller_users_1 = __importDefault(require("../controllers/controller-users"));
const usersRouter = express_1.default.Router();
const controllerUsers = new controller_users_1.default();
usersRouter.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerUsers.register(req, res);
}));
usersRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerUsers.login(req, res);
}));
usersRouter.get('/getAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerUsers.getAll(req, res);
}));
usersRouter.get('/findById', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerUsers.getById(req, res);
}));
usersRouter.get('/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerUsers.update(req, res);
}));
usersRouter.get('/exclude', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerUsers.exclude(req, res);
}));
exports.default = usersRouter;
//# sourceMappingURL=routers-users.js.map