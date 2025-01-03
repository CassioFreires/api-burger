import { Request, Response } from "express";
export default class AuthController {
    login(req: Request, res: Response): Promise<any>;
    register(req: Request, res: Response): Promise<void>;
}
