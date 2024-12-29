import express from 'express';
import { Router } from 'express';
import { Request, Response } from 'express';
import ControllersPromocoes from '../controllers/controllers-promocoes';

const promotionsRouter: Router = express.Router();
const controllerPromotions = new ControllersPromocoes();

promotionsRouter.post('/create', async (req: Request, res: Response): Promise<any> => {
    return await controllerPromotions.create(req, res);
});

promotionsRouter.get('/getAll', async (req: Request, res: Response): Promise<any> => {
    return await controllerPromotions.getAll(req, res);
});

promotionsRouter.get('/getById/:id', async (req: Request, res: Response): Promise<any> => {
    return await controllerPromotions.getById(req, res);
});

promotionsRouter.patch('/update/:id', async (req: Request, res: Response): Promise<any> => {
    return await controllerPromotions.update(req, res);
});
promotionsRouter.delete('/delete/:id', async (req: Request, res: Response): Promise<any> => {
    return await controllerPromotions.exclude(req, res);
});


export default promotionsRouter;