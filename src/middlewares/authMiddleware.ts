import { Request, Response, NextFunction } from 'express';
import { JWT_CONFIG } from '../config/config';
import jwt from 'jsonwebtoken';

export function AuthMiddleware(req: Request, res: Response, next: NextFunction): void {
    try {
        const token = req.headers['authorization']?.split(' ')[1];
        console.log(token);

        if (!token) {
             res.status(403).json({ message: 'Token is required' });
             return;
        }

        // Verifica o token e anexa o payload ao objeto req
        const payload = jwt.verify(token, JWT_CONFIG.SECRET);
        console.log('Token válido', payload);

        req.user = payload;  // Anexa o payload no req.user

        next();  // Chama o próximo middleware ou manipulador de rota
    } catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
}
