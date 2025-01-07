import { Response, Request } from "express";
import InterfaceResponsePromotions from "../interfaces/Promotions/interface-response";
export default class ControllersPromocoes {
    private servicePromotions;
    constructor();
    create(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions>>;
    getAll(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions>>;
    getById(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions>>;
    update(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions>>;
    exclude(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions>>;
}
