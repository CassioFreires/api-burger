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
const typeorm_1 = require("typeorm");
const entities_address_get_1 = __importDefault(require("../Address/entities-address.get"));
const entities_users_get_1 = __importDefault(require("../Users/entities-users-get"));
let OrderEntitiesGetAll = class OrderEntitiesGetAll {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderEntitiesGetAll.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderEntitiesGetAll.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderEntitiesGetAll.prototype, "id_endereco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderEntitiesGetAll.prototype, "id_pedido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntitiesGetAll.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntitiesGetAll.prototype, "sobrenome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntitiesGetAll.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntitiesGetAll.prototype, "celular", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntitiesGetAll.prototype, "forma_de_pagamento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntitiesGetAll.prototype, "metodo_de_entrega", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntitiesGetAll.prototype, "status_do_pedido", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], OrderEntitiesGetAll.prototype, "total_value", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], OrderEntitiesGetAll.prototype, "data_hora_pedido", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Array)
], OrderEntitiesGetAll.prototype, "items_do_pedido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_users_get_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'id_user' }),
    __metadata("design:type", entities_users_get_1.default)
], OrderEntitiesGetAll.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_address_get_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'id_endereco' }),
    __metadata("design:type", entities_address_get_1.default)
], OrderEntitiesGetAll.prototype, "endereco", void 0);
OrderEntitiesGetAll = __decorate([
    (0, typeorm_1.Entity)('orders')
], OrderEntitiesGetAll);
exports.default = OrderEntitiesGetAll;
//# sourceMappingURL=entities-get-orders.js.map