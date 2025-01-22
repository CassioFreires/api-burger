import { Request, Response, NextFunction } from 'express';
export declare function RoleMiddleware(roles: string[]): (req: Request, res: Response, next: NextFunction) => void;
