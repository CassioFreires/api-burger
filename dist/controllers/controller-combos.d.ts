import express from 'express';
import { Request, Response } from 'express';
import InterfaceResponseCombos from '../interfaces/Combos/interface-response';
import { CombosDTO } from '../dtos/Combos/dto-get-combos';
import ServiceCombos from '../services/service-combos';
export default class ControllerCombos {
    serviceCombos: ServiceCombos;
    constructor();
    create(req: Request, res: Response): Promise<Response<InterfaceResponseCombos | CombosDTO>>;
    getAll(req: Request, res: Response): Promise<Response<InterfaceResponseCombos | CombosDTO>>;
    getById(req: Request, res: Response): Promise<Response<InterfaceResponseCombos | CombosDTO>>;
    update(req: Request, res: Response): Promise<express.Response<any, Record<string, any>>>;
    exclude(req: Request, res: Response): Promise<Response<InterfaceResponseCombos | CombosDTO>>;
}
