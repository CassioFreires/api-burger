import express from 'express';
import { Router } from 'express';
import ControllerBurger from '../controllers/controllers-burger';
import { Request, Response } from 'express';
import { AuthMiddleware } from '../middlewares/authMiddleware';
import { RoleMiddleware } from '../middlewares/RoleMiddleware';

const burgerRouter: Router = express.Router();
const controllerBurger = new ControllerBurger();

burgerRouter.post('/create',  AuthMiddleware, RoleMiddleware(['Admin']), async (req: Request, res: Response): Promise<any> => {
    return await controllerBurger.create(req, res);  // Chama o controlador
});

burgerRouter.get('/getAll', AuthMiddleware, RoleMiddleware(['Admin','Funcionario', 'Cliente']), async (req: Request, res: Response): Promise<any> => {
    return await controllerBurger.getAll(req, res);
});

burgerRouter.get('/getById/:id', AuthMiddleware, RoleMiddleware(['Admin','Funcionario', 'Cliente']), async (req: Request, res: Response): Promise<any> => {
    return await controllerBurger.getById(req, res);
});

burgerRouter.patch('/update/:id', AuthMiddleware, RoleMiddleware(['Admin']), async (req: Request, res: Response): Promise<any> => {
    return await controllerBurger.update(req, res);
});
burgerRouter.delete('/delete/:id', AuthMiddleware, RoleMiddleware(['Admin']), async (req: Request, res: Response): Promise<any> => {
    return await controllerBurger.exclude(req, res);
});


export default burgerRouter;