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
const entities_users_login_1 = __importDefault(require("../Users/entities-users-login"));
const entities_permission_get_1 = __importDefault(require("../Permissions/entities-permission-get"));
const entities_rolePermission_get_1 = __importDefault(require("../Role_Permission/entities-rolePermission-get"));
let RoleEntities = class RoleEntities {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoleEntities.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoleEntities.prototype, "role_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoleEntities.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_users_login_1.default, (user) => user.roles),
    __metadata("design:type", Array)
], RoleEntities.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_permission_get_1.default, (permission) => permission.roles),
    (0, typeorm_1.JoinTable)({ name: 'role_permissions', joinColumn: { name: 'role_id', referencedColumnName: 'id' }, inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' } }),
    __metadata("design:type", Array)
], RoleEntities.prototype, "permissions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_rolePermission_get_1.default, (rolePermission) => rolePermission.role),
    __metadata("design:type", Array)
], RoleEntities.prototype, "rolePermissions", void 0);
RoleEntities = __decorate([
    (0, typeorm_1.Entity)('roles')
], RoleEntities);
exports.default = RoleEntities;
//# sourceMappingURL=entities-roles-get.js.map