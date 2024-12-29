import { Response, Request } from "express";
import ServiceBurger from "../services/services-burgers";
import InterfaceResponseBurgers from "../interfaces/Burgers/interface-response";
import { BurgersDTO } from "../dtos/Burgers/dto-burgers";
export default class ControllerBurger {
    serviceBurger: ServiceBurger;
    constructor();
    create(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers | BurgersDTO>>;
    getAll(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers | BurgersDTO>>;
    getById(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers | BurgersDTO>>;
    update(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers | BurgersDTO>>;
    exclude(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers | BurgersDTO>>;
}
