"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = AuthMiddleware;
const config_1 = require("../config/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function AuthMiddleware(req, res, next) {
    var _a;
    try {
        const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            res.status(403).json({ message: 'Token is required' });
            return;
        }
        // Verifica o token e anexa o payload ao objeto req
        const payload = jsonwebtoken_1.default.verify(token, config_1.JWT_CONFIG.SECRET);
        console.log('Token válido', payload);
        req.user = payload; // Anexa o payload no req.user
        next(); // Chama o próximo middleware ou manipulador de rota
    }
    catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
}
//# sourceMappingURL=authMiddleware.js.map