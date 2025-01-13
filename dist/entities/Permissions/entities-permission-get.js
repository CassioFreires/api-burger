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
const entities_roles_get_1 = __importDefault(require("../Roles/entities-roles-get"));
let PermissionEntities = class PermissionEntities {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PermissionEntities.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PermissionEntities.prototype, "permission_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PermissionEntities.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_roles_get_1.default, (role) => role.permissions),
    __metadata("design:type", Array)
], PermissionEntities.prototype, "roles", void 0);
PermissionEntities = __decorate([
    (0, typeorm_1.Entity)('permissions')
], PermissionEntities);
exports.default = PermissionEntities;
//# sourceMappingURL=entities-permission-get.js.map