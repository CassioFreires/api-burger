import { Request, Response } from 'express';
import InterfaceResponseDrinks from '../interfaces/Drinks/interface-response-drinks';
import DrinksDTO from '../dtos/Drinks/dto-drinks';
import ServiceDrinks from '../services/service-drinks';
export default class ControllerDrinks {
    serviceDrinks: ServiceDrinks;
    constructor();
    create(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks | DrinksDTO>>;
    getAll(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks | DrinksDTO>>;
    getById(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks | DrinksDTO>>;
    update(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks | DrinksDTO>>;
    exclude(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks | DrinksDTO>>;
}
