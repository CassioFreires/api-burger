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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dto_auth_1 = __importDefault(require("../dtos/Auth/dto-auth"));
const service_login_1 = __importDefault(require("../services/service-login"));
class AuthController {
    constructor() {
        this.authService = new service_login_1.default();
    }
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                if (!email || !password) {
                    return res.json({ message: 'Invalid Login', status: 401 });
                }
                const loginDto = new dto_auth_1.default(email, password);
                const response = yield this.authService.auth(loginDto);
                // Se a resposta for válida, retorne sucesso
                if (response) {
                    return res.json({ message: 'login OK', status: 201 });
                }
                else {
                    // Se não for válida (por exemplo, se a resposta for null), trate o erro
                    return res.json({ message: 'Invalid credentials', status: 401 });
                }
            }
            catch (error) {
                // Lidar com erros de forma consistente
                console.error(error);
                return res.status(500).json({ message: 'Internal Server Error', status: 500 });
            }
        });
    }
}
exports.default = AuthController;
//# sourceMappingURL=controller-auth.js.map