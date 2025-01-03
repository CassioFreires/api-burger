"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const loginDto = new LoginDto(req.body.email, req.body.password);
                // const response = await authService.login(loginDto);
                // res.json(response);
            }
            catch (error) {
                // res.status(400).json({ message: error.message });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const { email, password, name, role_id } = req.body;
                // const userDto = new CreateUserDto(email, password, name, role_id);
                // const response = await authService.register(userDto);
                // res.json(response);
            }
            catch (error) {
                // res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.default = AuthController;
//# sourceMappingURL=controller-auth.js.map