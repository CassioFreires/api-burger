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
const controllers_burger_1 = __importDefault(require("../controllers/controllers-burger"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const RoleMiddleware_1 = require("../middlewares/RoleMiddleware");
const burgerRouter = express_1.default.Router();
const controllerBurger = new controllers_burger_1.default();
burgerRouter.post('/create', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerBurger.create(req, res); // Chama o controlador
}));
burgerRouter.get('/getAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerBurger.getAll(req, res);
}));
burgerRouter.get('/getById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerBurger.getById(req, res);
}));
burgerRouter.patch('/update/:id', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerBurger.update(req, res);
}));
burgerRouter.delete('/delete/:id', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerBurger.exclude(req, res);
}));
exports.default = burgerRouter;
//# sourceMappingURL=routers-burger.js.map