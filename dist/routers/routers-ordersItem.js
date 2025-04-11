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
const controller_ordersItem_1 = __importDefault(require("../controllers/controller-ordersItem"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const RoleMiddleware_1 = require("../middlewares/RoleMiddleware");
const orderItemsRouter = express_1.default.Router();
const controllerOrderItems = new controller_ordersItem_1.default();
// Adicionar um item a um pedido
orderItemsRouter.post('/create', authMiddleware_1.AuthMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerOrderItems.create(req, res);
}));
// Obter todos os itens de um pedido específico
orderItemsRouter.get('/getByOrderId/:orderId', authMiddleware_1.AuthMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerOrderItems.getByOrderId(req, res);
}));
// Atualizar um item de pedido
orderItemsRouter.patch('/update/:id', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerOrderItems.update(req, res);
}));
// Excluir um item de pedido
orderItemsRouter.delete('/delete/:id', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerOrderItems.exclude(req, res);
}));
exports.default = orderItemsRouter;
//# sourceMappingURL=routers-ordersItem.js.map