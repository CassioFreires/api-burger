import { Request, Response } from "express";
export default class ControllerAddress {
    private serviceAddress;
    constructor();
    create(req: Request, res: Response): Promise<Response>;
    getByUserId(req: Request, res: Response): Promise<Response>;
    update(req: Request, res: Response): Promise<Response>;
    exlucde(req: Request, res: Response): Promise<Response>;
}
