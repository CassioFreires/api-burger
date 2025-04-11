import { Request, Response } from 'express';
import InterfaceResponseOrderItems from '../interfaces/OrdersItem/inteface-response';
export default class ControllerOrderItems {
    private serviceOrderItems;
    constructor();
    create(req: Request, res: Response): Promise<Response<InterfaceResponseOrderItems>>;
    getByOrderId(req: Request, res: Response): Promise<Response<InterfaceResponseOrderItems>>;
    update(req: Request, res: Response): Promise<Response<InterfaceResponseOrderItems>>;
    exclude(req: Request, res: Response): Promise<Response<InterfaceResponseOrderItems>>;
}
