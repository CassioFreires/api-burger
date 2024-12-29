import { Response, Request } from "express";
import ServicePromocoes from "../services/service-promocoes";
import InterfaceResponsePromotions from "../interfaces/Promotions/interface-response";
import { PromotionsDTO } from "../dtos/Promotions/dto-get-promo";
export default class ControllersPromocoes {
    servicePromotions: ServicePromocoes;
    constructor();
    create(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions | PromotionsDTO>>;
    getAll(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions | PromotionsDTO>>;
    getById(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions | PromotionsDTO>>;
    update(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions | PromotionsDTO>>;
    exclude(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions | PromotionsDTO>>;
}
