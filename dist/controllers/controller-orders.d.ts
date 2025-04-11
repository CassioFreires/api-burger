import { Request, Response } from 'express';
export default class ControllerOrders {
    private serviceOrders;
    private serviceAddress;
    constructor();
    create(req: Request, res: Response): Promise<Response>;
    getAll(req: Request, res: Response): Promise<Response<Response>>;
    updateStatus(req: Request, res: Response): Promise<Response>;
}
