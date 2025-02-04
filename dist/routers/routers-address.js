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
const authMiddleware_1 = require("../middlewares/authMiddleware");
const RoleMiddleware_1 = require("../middlewares/RoleMiddleware");
const controller_address_1 = __importDefault(require("../controllers/controller-address"));
const addressRouter = express_1.default.Router();
const controllerAddress = new controller_address_1.default();
addressRouter.post('/create', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Cliente', 'Admin', 'Funcionário']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerAddress.create(req, res);
}));
addressRouter.get('/getByUserId', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Cliente', 'Admin', 'Funcionário']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerAddress.getByUserId(req, res);
}));
exports.default = addressRouter;
//# sourceMappingURL=routers-address.js.map