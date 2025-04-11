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
const dto_ordersItem_1 = __importDefault(require("../dtos/OrdersItem/dto-ordersItem"));
const service_ordersItem_1 = __importDefault(require("../services/service-ordersItem"));
const dto_update_ordersItem_1 = __importDefault(require("../dtos/OrdersItem/dto-update-ordersItem"));
class ControllerOrderItems {
    constructor() {
        this.serviceOrderItems = new service_ordersItem_1.default();
    }
    // Adicionar item ao pedido
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { order_id, product_id, quantity, price } = req.body;
                if (!order_id || !product_id || !quantity || !price) {
                    return res.json({ message: 'All fields are required: order_id, product_id, quantity, price', status: 400 });
                }
                const orderItemDTO = new dto_ordersItem_1.default(order_id, product_id, quantity, price);
                const orderItem = yield this.serviceOrderItems.createService(orderItemDTO);
                if (!orderItem) {
                    return res.status(400).json({ message: 'Failed to create order item', status: 400 });
                }
                return res.status(201).json({ message: 'Order item created successfully', orderItem });
            }
            catch (error) {
                console.error('Failed to create order item', error);
                return res.status(500).json({ message: 'Internal server error', status: 500 });
            }
        });
    }
    // Obter todos os itens de um pedido
    getByOrderId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { orderId } = req.params;
                if (!orderId || isNaN(Number(orderId))) {
                    return res.json({ message: 'Invalid orderId', status: 400 });
                }
                const orderItems = yield this.serviceOrderItems.getItemsByOrderIdService(Number(orderId));
                if (!orderItems || orderItems.length === 0) {
                    return res.json({ message: 'No items found for the order', status: 404 });
                }
                return res.status(200).json({ message: 'Order items retrieved successfully', orderItems });
            }
            catch (error) {
                console.error('Failed to retrieve order items', error);
                return res.status(500).json({ message: 'Internal server error', status: 500 });
            }
        });
    }
    // Atualizar item de pedido
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id))) {
                    return res.json({ message: 'Invalid ID', status: 400 });
                }
                const { quantity, price } = req.body;
                if (!quantity && !price) {
                    return res.json({ message: 'At least one field (quantity or price) is required to update', status: 400 });
                }
                const orderItemUpdateDTO = new dto_update_ordersItem_1.default(quantity, price);
                const updatedOrderItem = yield this.serviceOrderItems.updateService(Number(id), orderItemUpdateDTO);
                if (!updatedOrderItem) {
                    return res.status(404).json({ message: 'Order item not found or failed to update', status: 404 });
                }
                return res.status(200).json({ message: 'Order item updated successfully', updatedOrderItem });
            }
            catch (error) {
                console.error('Failed to update order item', error);
                return res.status(500).json({ message: 'Internal server error', status: 500 });
            }
        });
    }
    // Excluir item do pedido
    exclude(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id))) {
                    return res.json({ message: 'Invalid ID', status: 400 });
                }
                const deletedOrderItem = yield this.serviceOrderItems.deleteService(Number(id));
                if (!deletedOrderItem) {
                    return res.status(404).json({ message: 'Order item not found or failed to delete', status: 404 });
                }
                return res.status(200).json({ message: 'Order item deleted successfully', deletedOrderItem });
            }
            catch (error) {
                console.error('Failed to delete order item', error);
                return res.status(500).json({ message: 'Internal server error', status: 500 });
            }
        });
    }
}
exports.default = ControllerOrderItems;
//# sourceMappingURL=controller-ordersItem.js.map