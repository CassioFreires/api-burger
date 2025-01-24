import express from 'express';
import { Router } from 'express';
import { Request, Response } from 'express';
import ControllerCombos from '../controllers/controller-combos';
import { AuthMiddleware } from '../middlewares/authMiddleware';
import { RoleMiddleware } from '../middlewares/RoleMiddleware';

const combosRouter: Router = express.Router();
const controllerCombos = new ControllerCombos();

combosRouter.post('/create', AuthMiddleware, RoleMiddleware(['admin']), async (req: Request, res: Response): Promise<any> => {
    return await controllerCombos.create(req, res);
});

combosRouter.get('/getAll', AuthMiddleware, RoleMiddleware(['Admin','Funcionário', 'Cliente']), async (req: Request, res: Response): Promise<any> => {
    return await controllerCombos.getAll(req, res);
});

combosRouter.get('/getById/:id', AuthMiddleware, RoleMiddleware(['Admin','Funcionario', 'Cliente']) , async (req: Request, res: Response): Promise<any> => {
    return await controllerCombos.getById(req, res);
});

combosRouter.patch('/update/:id', AuthMiddleware, RoleMiddleware(['admin']), async (req: Request, res: Response): Promise<any> => {
    return await controllerCombos.update(req, res);
});
combosRouter.delete('/delete/:id', AuthMiddleware, RoleMiddleware(['admin']), async (req: Request, res: Response): Promise<any> => {
    return await controllerCombos.exclude(req, res);
});


export default combosRouter;