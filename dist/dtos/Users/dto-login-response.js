"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponseDTO = void 0;
class LoginResponseDTO {
    constructor(id, email, role) {
        this.id = id;
        this.email = email;
        this.role = {
            id: role.id,
            role_name: role.role_name,
            permissions: role.permissions, // Permissões associadas ao role
        };
    }
}
exports.LoginResponseDTO = LoginResponseDTO;
//# sourceMappingURL=dto-login-response.js.map