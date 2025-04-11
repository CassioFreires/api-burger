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
const controller_orders_1 = __importDefault(require("../controllers/controller-orders"));
const ordersRouter = express_1.default.Router();
const controllerOrders = new controller_orders_1.default();
// Criação de um pedido
ordersRouter.post('/create', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin', 'Funcionário', 'Cliente']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerOrders.create(req, res);
}));
// Obter todos os pedidos
ordersRouter.get('/getAll', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin', 'Funcionário']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerOrders.getAll(req, res);
}));
// // Atualizar um pedido (Ex: mudar status de um pedido)
ordersRouter.patch('/updateStatus/:id', authMiddleware_1.AuthMiddleware, (0, RoleMiddleware_1.RoleMiddleware)(['Admin', 'Funcionário']), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield controllerOrders.updateStatus(req, res);
}));
// // Obter pedido por ID
// ordersRouter.get('/getById/:id', AuthMiddleware, async (req: Request, res: Response): Promise<any> => {
//     return await controllerOrders.getById(req, res);
// });
// // Atualizar um pedido (Ex: mudar status de um pedido)
// ordersRouter.patch('/update/:id', AuthMiddleware, RoleMiddleware(['Admin']), async (req: Request, res: Response): Promise<any> => {
//     return await controllerOrders.update(req, res);
// });
// // Excluir um pedido
// ordersRouter.delete('/delete/:id', AuthMiddleware, RoleMiddleware(['Admin']), async (req: Request, res: Response): Promise<any> => {
//     return await controllerOrders.exclude(req, res);
// });
exports.default = ordersRouter;
//# sourceMappingURL=routers-orders.js.map