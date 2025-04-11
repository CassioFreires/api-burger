"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateOrderItemDTO {
    constructor(order_id, item_id, item_type, quantity, price) {
        this.order_id = order_id;
        this.item_type = item_type;
        this.item_id = item_id;
        this.quantity = quantity;
        this.price = price;
    }
}
exports.default = CreateOrderItemDTO;
//# sourceMappingURL=dto-create-ordersItem.js.map