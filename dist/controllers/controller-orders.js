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
const service_orders_1 = __importDefault(require("../services/service-orders"));
const service_address_1 = __importDefault(require("../services/service-address"));
const dto_updateStatus_order_1 = require("../dtos/Orders/dto-updateStatus-order");
class ControllerOrders {
    constructor() {
        this.serviceOrders = new service_orders_1.default();
        this.serviceAddress = new service_address_1.default();
    }
    // Criação de pedido
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { order } = req.body;
                const userId = req.user.id; // Substituir por id autenticado, se tiver login
                if (!order || typeof order !== 'object') {
                    return res.status(400).json({ message: 'Pedido inválido.' });
                }
                console.log("📦 Pedido recebido:", order);
                yield new service_orders_1.default().createService(order, userId);
                return res.status(201).json({
                    message: "Pedido criado com sucesso!",
                });
            }
            catch (error) {
                console.error("❌ Erro completo:", JSON.stringify(error, null, 2));
                return res.status(500).json({
                    message: "Erro interno ao criar pedido",
                    error: error instanceof Error ? error.message : error,
                });
            }
        });
    }
    getAllById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idOrder } = req.params;
                if (!idOrder || isNaN(Number(idOrder))) {
                    return res.status(400).json({ message: '❌ ID inválido', status: 400 });
                }
                const orders = yield this.serviceOrders.getByIdService(Number(idOrder));
                console.log(orders);
                if (!orders) {
                    return res.json({ message: 'No orders found', status: 404 });
                }
                return res.status(200).json({ message: 'Orders retrieved successfully', orders });
            }
            catch (error) {
                console.error('Failed to retrieve orders', error);
                return res.status(500).json({ message: 'Internal server error', status: 500 });
            }
        });
    }
    // // Obter todos os pedidos
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield this.serviceOrders.getAllService();
                console.log(orders);
                if (!orders || orders.length === 0) {
                    return res.json({ message: 'No orders found', status: 404 });
                }
                return res.status(200).json({ message: 'Orders retrieved successfully', orders });
            }
            catch (error) {
                console.error('Failed to retrieve orders', error);
                return res.status(500).json({ message: 'Internal server error', status: 500 });
            }
        });
    }
    // // Atualizar pedido
    updateStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id))) {
                    return res.status(400).json({ message: '❌ ID inválido', status: 400 });
                }
                const { status, total_price } = req.body;
                if (!status && !total_price) {
                    return res.status(400).json({
                        message: '⚠️ Forneça ao menos um campo para atualizar: "status" ou "total_price"',
                        status: 400
                    });
                }
                const orderUpdateDTO = new dto_updateStatus_order_1.OrderUpdateStatusDTO(status, total_price);
                const updatedOrder = yield this.serviceOrders.updateOrderService(Number(id), orderUpdateDTO);
                if (!updatedOrder) {
                    return res.status(404).json({ message: '❌ Pedido não encontrado ou falha ao atualizar', status: 404 });
                }
                return res.status(200).json({
                    message: '✅ Pedido atualizado com sucesso!',
                    updatedOrder
                });
            }
            catch (error) {
                console.error('❌ Falha ao atualizar pedido:', error);
                return res.status(500).json({
                    message: '🚨 Erro interno ao atualizar pedido',
                    status: 500
                });
            }
        });
    }
    exclude(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id))) {
                    return res.status(400).json({ message: '❌ ID inválido', status: 400 });
                }
                yield this.serviceOrders.excludeService(Number(id));
                return res.status(200).json({
                    message: '✅ Pedido deletado com sucesso!',
                });
            }
            catch (error) {
                console.error('❌ Falha ao deletado pedido:', error);
                return res.status(500).json({
                    message: '🚨 Erro interno ao deletado pedido',
                    status: 500
                });
            }
        });
    }
}
exports.default = ControllerOrders;
//# sourceMappingURL=controller-orders.js.map