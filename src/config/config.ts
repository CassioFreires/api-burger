import dotenv from 'dotenv';
dotenv.config();

// Configuração de segurança das informações do banco de dados
export const JWT_CONFIG = {
    SECRET: process.env.JWT_SECRET || 'defaultSecret',
    EXPIRATION: process.env.JWT_EXPIRATION || '24h',
    ISSUER: process.env.JWT_ISSUER || 'myApp'
}