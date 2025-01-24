import { Request, Response, NextFunction } from 'express';

// Middleware para verificar se o usuário tem a permissão necessária
export function RoleMiddleware(roles: string[]) {
    return (req: Request, res: Response, next: NextFunction):void => {
        const userRole = req.user?.name; // O papel do usuário vem do token JWT
        
        if (!userRole) {
            res.status(403).json({ message: 'Role not found' });
            return;
        }

        if (!roles.includes(userRole)) {
            res.status(403).json({ message: 'Access denied: insufficient role' });
            return;
        }

        next();  // O usuário tem a permissão necessária
    };
}
