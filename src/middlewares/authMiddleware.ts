import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/authUtils";

export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }

    try {
        const decoded = verifyToken(token);  // Verifica o token
        // req.user = decoded;  // Salva a informação do usuário no request
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
}