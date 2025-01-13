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
const service_user_1 = __importDefault(require("../services/service-user"));
const dto_login_users_1 = __importDefault(require("../dtos/Users/dto-login-users"));
class ControllerUsers {
    constructor() {
        this.serviceUser = new service_user_1.default();
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password_hash } = req.body;
                if (!email || !password_hash) {
                    return res.json({ message: 'Invalid Login', status: 401 });
                }
                const loginDto = new dto_login_users_1.default(email, password_hash);
                const response = yield this.serviceUser.login(loginDto);
                if (!response || response.password_hash !== password_hash) {
                    return res.json({ message: 'Invalid credentials', status: 401 });
                }
                // generateToken()
                return res.json({ message: 'login OK', status: 201, response });
            }
            catch (error) {
                // Lidar com erros de forma consistente
                console.error(error);
                return res.status(500).json({ message: 'Internal Server Error', status: 500 });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // registrar usuário
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Failed to register user', status: 500 });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // registrar usuário
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Failed to getAll user', status: 500 });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // registrar usuário
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Failed to get by "id" user', status: 500 });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // registrar usuário
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Failed to update user', status: 500 });
            }
        });
    }
    exclude(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // registrar usuário
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Failed to delete user', status: 500 });
            }
        });
    }
}
exports.default = ControllerUsers;
//# sourceMappingURL=controller-users.js.map