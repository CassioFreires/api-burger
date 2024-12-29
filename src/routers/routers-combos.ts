import express from 'express';
import { Router } from 'express';
import { Request, Response } from 'express';
import ControllerCombos from '../controllers/controller-combos';

const combosRouter: Router = express.Router();
const controllerCombos = new ControllerCombos();

combosRouter.post('/create', async (req: Request, res: Response): Promise<any> => {
    return await controllerCombos.create(req, res);
});

combosRouter.get('/getAll', async (req: Request, res: Response): Promise<any> => {
    return await controllerCombos.getAll(req, res);
});

combosRouter.get('/getById/:id', async (req: Request, res: Response): Promise<any> => {
    return await controllerCombos.getById(req, res);
});

combosRouter.patch('/update/:id', async (req: Request, res: Response): Promise<any> => {
    return await controllerCombos.update(req, res);
});
combosRouter.delete('/delete/:id', async (req: Request, res: Response): Promise<any> => {
    return await controllerCombos.exclude(req, res);
});


export default combosRouter;