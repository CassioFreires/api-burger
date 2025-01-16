"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUserDTO {
    constructor(name, email, password_hash, role_id, // Opcional, pois o padrão será '3' (Cliente)
    active) {
        this.name = name;
        this.email = email;
        this.password_hash = password_hash;
        this.role_id = role_id;
        this.active = active;
    }
}
exports.default = CreateUserDTO;
//# sourceMappingURL=dto-create-users.js.map