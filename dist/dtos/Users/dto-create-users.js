"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUserDTO {
    constructor(name, email, password, role, // Opcional, pois o padrão será '1' (Cliente)
    status) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.status = status;
    }
}
exports.default = CreateUserDTO;
//# sourceMappingURL=dto-create-users.js.map