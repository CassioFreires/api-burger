import session from 'express-session';

declare module 'express-session' {
  interface SessionData {
    userData?: {
      id: string;
      name: string;
      email: string;
      role_name: string;
    };
    twoFactorCode?: string;
    twoFactorExpires?: number;
  }
}
