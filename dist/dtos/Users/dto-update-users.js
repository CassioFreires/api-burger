"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateUserDTO {
    constructor(name, email, password_hash, role_id, active) {
        this.name = name;
        this.email = email;
        this.password_hash = password_hash;
        this.role_id = role_id;
        this.active = active;
    }
}
exports.default = UpdateUserDTO;
//# sourceMappingURL=dto-update-users.js.map