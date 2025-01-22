// src/types/express.d.ts
declare namespace Express {
    export interface Request {
      user?: any; // Defina o tipo de 'user' como quiser (pode ser `JwtPayload` ou algo mais específico)
    }
  }