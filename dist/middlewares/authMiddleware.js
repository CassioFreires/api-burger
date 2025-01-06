"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = AuthMiddleware;
const authUtils_1 = require("../utils/authUtils");
function AuthMiddleware(req, res, next) {
    var _a;
    const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }
    try {
        const decoded = (0, authUtils_1.verifyToken)(token); // Verifica o token
        // req.user = decoded;  // Salva a informação do usuário no request
        next();
    }
    catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
}
//# sourceMappingURL=authMiddleware.js.map