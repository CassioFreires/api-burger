import { Request, Response } from 'express';
import InterfaceResponseCombos from '../interfaces/Combos/interface-response';
export default class ControllerCombos {
    private serviceCombos;
    constructor();
    create(req: Request, res: Response): Promise<Response<InterfaceResponseCombos>>;
    getAll(req: Request, res: Response): Promise<Response<InterfaceResponseCombos>>;
    getById(req: Request, res: Response): Promise<Response<InterfaceResponseCombos>>;
    update(req: Request, res: Response): Promise<Response<InterfaceResponseCombos>>;
    exclude(req: Request, res: Response): Promise<Response<InterfaceResponseCombos>>;
}
