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
Object.defineProperty(exports, "__esModule", { value: true });
class OrderController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { order } = req.body;
                if (!order)
                    return res.status(401).json({ message: 'you need to fill in all the fields' });
                return res.status(201).json({ message: 'Order send successfully', order });
            }
            catch (error) {
                console.error('Failed to create order', error);
                return res.status(500).json({ message: 'Failed to create order', status: 500 });
            }
        });
    }
}
exports.default = OrderController;
//# sourceMappingURL=controller-order.js.map