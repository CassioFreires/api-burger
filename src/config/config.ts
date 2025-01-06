import dotenv from 'dotenv';
dotenv.config();

export const JWT_CONFIG = {
    SECRET: process.env.JWT_SECRET || 'defaultSecret',
    EXPIRATION: process.env.JWT_EXPIRATION || '1h',
    ISSUER: process.env.JWT_ISSUER || 'myApp'
}