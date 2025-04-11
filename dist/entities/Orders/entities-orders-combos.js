"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderComboEntities = void 0;
const typeorm_1 = require("typeorm");
const entities_orders_1 = require("./entities-orders");
const entities_combo_get_1 = __importDefault(require("../Combos/entities.combo.get"));
let OrderComboEntities = class OrderComboEntities {
};
exports.OrderComboEntities = OrderComboEntities;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderComboEntities.prototype, "order_combo_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_orders_1.OrderEntities, (order) => order.order_id),
    __metadata("design:type", entities_orders_1.OrderEntities)
], OrderComboEntities.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_combo_get_1.default, (combo) => combo.combo_id),
    __metadata("design:type", entities_combo_get_1.default)
], OrderComboEntities.prototype, "combo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderComboEntities.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], OrderComboEntities.prototype, "price", void 0);
exports.OrderComboEntities = OrderComboEntities = __decorate([
    (0, typeorm_1.Entity)('order_combos')
], OrderComboEntities);
//# sourceMappingURL=entities-orders-combos.js.map