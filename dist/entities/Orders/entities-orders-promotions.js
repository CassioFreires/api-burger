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
exports.OrderPromotionEntities = void 0;
const typeorm_1 = require("typeorm");
const entities_orders_1 = require("./entities-orders");
const entites_promo_get_1 = __importDefault(require("../Promotions/entites-promo-get"));
let OrderPromotionEntities = class OrderPromotionEntities {
};
exports.OrderPromotionEntities = OrderPromotionEntities;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderPromotionEntities.prototype, "order_promotion_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_orders_1.OrderEntities, (order) => order.order_id),
    __metadata("design:type", entities_orders_1.OrderEntities)
], OrderPromotionEntities.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entites_promo_get_1.default, (promotion) => promotion.promotion_id),
    __metadata("design:type", entites_promo_get_1.default)
], OrderPromotionEntities.prototype, "promotion", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], OrderPromotionEntities.prototype, "price", void 0);
exports.OrderPromotionEntities = OrderPromotionEntities = __decorate([
    (0, typeorm_1.Entity)('order_promotions')
], OrderPromotionEntities);
//# sourceMappingURL=entities-orders-promotions.js.map