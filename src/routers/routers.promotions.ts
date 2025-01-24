import express from 'express';
import { Router } from 'express';
import { Request, Response } from 'express';
import ControllersPromocoes from '../controllers/controllers-promocoes';
import { RoleMiddleware } from '../middlewares/RoleMiddleware';
import { AuthMiddleware } from '../middlewares/authMiddleware';

const promotionsRouter: Router = express.Router();
const controllerPromotions = new ControllersPromocoes();

promotionsRouter.post('/create', AuthMiddleware, RoleMiddleware(['Admin']), async (req: Request, res: Response): Promise<any> => {
    return await controllerPromotions.create(req, res);
});

promotionsRouter.get('/getAll', AuthMiddleware, RoleMiddleware(['Admin', 'Funcionário', 'Cliente']),  async (req: Request, res: Response): Promise<any> => {
    return await controllerPromotions.getAll(req, res);
});

promotionsRouter.get('/getById/:id', AuthMiddleware, RoleMiddleware(['Admin', 'Funcionário', 'Cliente']),  async (req: Request, res: Response): Promise<any> => {
    return await controllerPromotions.getById(req, res);
});

promotionsRouter.patch('/update/:id', AuthMiddleware, RoleMiddleware(['Admin']),  async (req: Request, res: Response): Promise<any> => {
    return await controllerPromotions.update(req, res);
});
promotionsRouter.delete('/delete/:id', AuthMiddleware, RoleMiddleware(['Admin']),  async (req: Request, res: Response): Promise<any> => {
    return await controllerPromotions.exclude(req, res);
});


export default promotionsRouter;