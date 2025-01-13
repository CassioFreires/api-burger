import { Request, Response } from "express";
export default class ControllerUsers {
    private serviceUser;
    login(req: Request, res: Response): Promise<any>;
    register(req: Request, res: Response): Promise<any>;
    getAll(req: Request, res: Response): Promise<any>;
    getById(req: Request, res: Response): Promise<any>;
    update(req: Request, res: Response): Promise<any>;
    exclude(req: Request, res: Response): Promise<any>;
}
