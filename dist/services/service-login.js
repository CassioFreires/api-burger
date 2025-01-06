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
const typeorm_1 = require("typeorm");
class AuthService {
    // dataBase: DataBase;
    // Ajuste o tipo de retorno para ser um objeto específico ou `null`
    auth(bodyLogin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Aqui você pode retornar os dados do usuário ou o que for necessário
                return { email: 'cassio', password: 'teste' };
            }
            catch (error) {
                console.error('Failed to all promotions');
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.log(error.message);
                    return null;
                }
                else {
                    console.error('unexpected error:', error);
                    throw error; // Aqui você pode jogar o erro para cima, em vez de retornar null
                }
            }
        });
    }
}
exports.default = AuthService;
//# sourceMappingURL=service-login.js.map