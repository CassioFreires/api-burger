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
const controller_drinks_1 = __importDefault(require("../controllers/controller-drinks"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const RoleMiddleware_1 = require("../middlewares/RoleMiddleware");
const drinksRouter = express_1.default.Router();
const controllerDrinks = new controller_drinks_1.default();
drinksRouter.post('/create', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerDrinks.create(req, res);
}));
drinksRouter.get('/getAll', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin', 'Funcionário', 'Cliente']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerDrinks.getAll(req, res);
}));
drinksRouter.get('/getById/:id', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin', 'Funcionário', 'Cliente']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerDrinks.getById(req, res);
}));
drinksRouter.patch('/update/:id', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerDrinks.update(req, res);
}));
drinksRouter.delete('/delete/:id', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerDrinks.exclude(req, res);
}));
exports.default = drinksRouter;
//# sourceMappingURL=routers-drinks.js.map