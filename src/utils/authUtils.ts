import jwt from 'jsonwebtoken';
import { JWT_CONFIG } from '../config/config';

export function generateToken(playload:object):string {
    return jwt.sign(playload, JWT_CONFIG.SECRET, {
        expiresIn: JWT_CONFIG.EXPIRATION,
        issuer: JWT_CONFIG.ISSUER
    });
}

export function verifyToken(token:string): any {
    try {
        return jwt.verify(token, JWT_CONFIG.SECRET);
    }catch(error){
        throw new Error('Invalid Token')
    }
} 