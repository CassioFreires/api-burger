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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let AddressEntities = class AddressEntities {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AddressEntities.prototype, "address_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AddressEntities.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AddressEntities.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], AddressEntities.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", Object)
], AddressEntities.prototype, "complement", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AddressEntities.prototype, "neighborhood", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], AddressEntities.prototype, "zip_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AddressEntities.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 2 }),
    __metadata("design:type", String)
], AddressEntities.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", Object)
], AddressEntities.prototype, "reference_point", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Object)
], AddressEntities.prototype, "created_at", void 0);
AddressEntities = __decorate([
    (0, typeorm_1.Entity)('address') // Nome da tabela no banco de dados
], AddressEntities);
exports.default = AddressEntities;
//# sourceMappingURL=entities-address.get.js.map