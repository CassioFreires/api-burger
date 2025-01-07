import { Request, Response } from 'express';
import InterfaceResponseDrinks from '../interfaces/Drinks/interface-response-drinks';
export default class ControllerDrinks {
    private serviceDrinks;
    constructor();
    create(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks>>;
    getAll(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks>>;
    getById(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks>>;
    update(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks>>;
    exclude(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks>>;
}
