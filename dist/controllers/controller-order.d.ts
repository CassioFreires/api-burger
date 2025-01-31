import { Request, Response } from "express";
export default class OrderController {
    create(req: Request, res: Response): Promise<any>;
}
