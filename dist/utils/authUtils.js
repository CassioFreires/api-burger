"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
function generateToken(playload) {
    return jsonwebtoken_1.default.sign(playload, config_1.JWT_CONFIG.SECRET, {
        expiresIn: config_1.JWT_CONFIG.EXPIRATION,
        issuer: config_1.JWT_CONFIG.ISSUER
    });
}
function verifyToken(token) {
    try {
        return jsonwebtoken_1.default.verify(token, config_1.JWT_CONFIG.SECRET);
    }
    catch (error) {
        throw new Error('Invalid Token');
    }
}
//# sourceMappingURL=authUtils.js.map