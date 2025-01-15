import { Request, Response, NextFunction } from "express";
import { JWT_CONFIG } from "../config/config";
import jwt from 'jsonwebtoken';

export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {

    try {
        const token = req.headers['authorization']?.split(' ')[1];
        console.log(token)

        if (!token) {
            return res.status(403).json({ message: 'Token is required' });
        }
        const payload = jwt.verify(token, JWT_CONFIG.SECRET);
        console.log('Token válido', payload);

        next();
        return payload;
    } catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
}