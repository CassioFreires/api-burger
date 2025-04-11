"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderDTO {
    constructor(user_id, address_id, total_price, order_status) {
        this.user_id = user_id;
        this.address_id = address_id;
        this.total_price = total_price;
        this.order_status = order_status;
    }
}
exports.default = OrderDTO;
//# sourceMappingURL=dto-create-orders.js.map