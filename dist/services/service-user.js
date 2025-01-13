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
const typeorm_1 = require("typeorm");
const DataBase_1 = __importDefault(require("../database/DataBase"));
const entities_users_login_1 = __importDefault(require("../entities/Users/entities-users-login"));
class ServiceUsers {
    constructor() {
        this.dataBase = new DataBase_1.default();
    }
    login(bodyLogin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Aqui você pode retornar os dados do usuário ou o que for necessário
                const getRepository = (yield this.dataBase.connect()).getRepository(entities_users_login_1.default);
                const user = yield getRepository.findOne({
                    where: {
                        email: bodyLogin.email
                    },
                    relations: ['roles']
                });
                return user;
            }
            catch (error) {
                console.error('failed error login:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error auth user in database:', error.message);
                    throw new Error('Failed to login');
                }
                else {
                    console.error('Unexpected error in loginService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    registerService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
}
exports.default = ServiceUsers;
//# sourceMappingURL=service-user.js.map