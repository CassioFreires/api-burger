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
exports.OrderHamburgerEntities = void 0;
const typeorm_1 = require("typeorm");
const entites_burgers_1 = __importDefault(require("../Burgers/entites-burgers"));
const entities_orders_1 = require("./entities-orders");
let OrderHamburgerEntities = class OrderHamburgerEntities {
};
exports.OrderHamburgerEntities = OrderHamburgerEntities;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderHamburgerEntities.prototype, "order_hamburger_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_orders_1.OrderEntities, (order) => order.order_id),
    __metadata("design:type", entities_orders_1.OrderEntities)
], OrderHamburgerEntities.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entites_burgers_1.default, (hamburger) => hamburger.id),
    __metadata("design:type", entites_burgers_1.default)
], OrderHamburgerEntities.prototype, "hamburger", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderHamburgerEntities.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], OrderHamburgerEntities.prototype, "price", void 0);
exports.OrderHamburgerEntities = OrderHamburgerEntities = __decorate([
    (0, typeorm_1.Entity)('order_hamburgers')
], OrderHamburgerEntities);
//# sourceMappingURL=entities-orders-hamburgers.js.map