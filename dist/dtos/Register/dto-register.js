"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisterDTO {
    constructor(_name, _email, _password) {
        this._name = _name;
        this._email = _email;
        this._password = _password;
        this.name = this._name;
        this.email = this._email;
        this.password = this._password;
    }
}
exports.default = RegisterDTO;
//# sourceMappingURL=dto-register.js.map