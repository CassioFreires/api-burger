import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
export declare function AuthMiddleware(req: Request, res: Response, next: NextFunction): string | Response<any, Record<string, any>> | jwt.JwtPayload | undefined;
