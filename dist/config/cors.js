"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const allowedOrigins = [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    // Adicione outros domínios aqui, se necessário
];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) {
            callback(null, true); // Permite requisições sem origem, como quando o front-end está no mesmo domínio
        }
        else {
            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            }
            else {
                console.log(`Origin not allowed: ${origin}`);
                callback(new Error('⛔ Not allowed by CORS'));
            }
        }
    },
    credentials: true, // Habilite se estiver usando cookies ou autenticação com sessão
};
exports.default = (0, cors_1.default)(corsOptions);
//# sourceMappingURL=cors.js.map