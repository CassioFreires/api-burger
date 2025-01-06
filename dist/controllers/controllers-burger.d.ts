import { Response, Request } from "express";
import InterfaceResponseBurgers from "../interfaces/Burgers/interface-response";
import { BurgersDTO } from "../dtos/Burgers/dto-burgers";
export default class ControllerBurger {
    private serviceBurger;
    constructor();
    create(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers>>;
    getAll(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers>>;
    getById(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers>>;
    update(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers>>;
    exclude(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers | BurgersDTO>>;
}
