"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserResponseDTO {
    constructor(id, name, email, role, status, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
exports.default = UserResponseDTO;
//# sourceMappingURL=dto-get-users.js.map