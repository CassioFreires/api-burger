"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMiddleware = RoleMiddleware;
// Middleware para verificar se o usuário tem a permissão necessária
function RoleMiddleware(roles) {
    return (req, res, next) => {
        var _a;
        const userRole = (_a = req.user) === null || _a === void 0 ? void 0 : _a.name; // O papel do usuário vem do token JWT
        if (!userRole) {
            res.status(403).json({ message: 'Role not found' });
            return;
        }
        if (!roles.includes(userRole)) {
            res.status(403).json({ message: 'Access denied: insufficient role' });
            return;
        }
        next(); // O usuário tem a permissão necessária
    };
}
//# sourceMappingURL=RoleMiddleware.js.map