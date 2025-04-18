"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_CONFIG = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Configuração de segurança das informações do banco de dados
exports.JWT_CONFIG = {
    SECRET: process.env.JWT_SECRET || 'defaultSecret',
    EXPIRATION: process.env.JWT_EXPIRATION || '24h',
    ISSUER: process.env.JWT_ISSUER || 'myApp'
};
//# sourceMappingURL=config.js.map