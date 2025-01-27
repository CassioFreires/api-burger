import express from 'express';
import { Router } from 'express';
import { Request, Response } from 'express';
import ControllerDrinks from '../controllers/controller-drinks';
import { AuthMiddleware } from '../middlewares/authMiddleware';
import { RoleMiddleware } from '../middlewares/RoleMiddleware';

const drinksRouter: Router = express.Router();
const controllerDrinks = new ControllerDrinks();

drinksRouter.post('/create', AuthMiddleware, RoleMiddleware(['Admin']), async (req: Request, res: Response): Promise<any> => {
    return await controllerDrinks.create(req, res);
});

drinksRouter.get('/getAll', async (req: Request, res: Response): Promise<any> => {
    return await controllerDrinks.getAll(req, res);
});

drinksRouter.get('/getById/:id', async (req: Request, res: Response): Promise<any> => {
    return await controllerDrinks.getById(req, res);
});

drinksRouter.patch('/update/:id', AuthMiddleware, RoleMiddleware(['Admin']), async (req: Request, res: Response): Promise<any> => {
    return await controllerDrinks.update(req, res);
});
drinksRouter.delete('/delete/:id', AuthMiddleware, RoleMiddleware(['Admin']), async (req: Request, res: Response): Promise<any> => {
    return await controllerDrinks.exclude(req, res);
});


export default drinksRouter;