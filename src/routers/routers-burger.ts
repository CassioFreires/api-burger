import express from 'express';
import { Router } from 'express';
import ControllerBurger from '../controllers/controllers-burger';
import { Request, Response } from 'express';

const burgerRouter: Router = express.Router();
const controllerBurger = new ControllerBurger();

burgerRouter.post('/create', async (req: Request, res: Response): Promise<any> => {
    return await controllerBurger.create(req, res);
});

burgerRouter.get('/getAll', async (req: Request, res: Response): Promise<any> => {
    return await controllerBurger.getAll(req, res);
});

burgerRouter.get('/getById/:id', async (req: Request, res: Response): Promise<any> => {
    return await controllerBurger.getById(req, res);
});

burgerRouter.patch('/update/:id', async (req: Request, res: Response): Promise<any> => {
    return await controllerBurger.update(req, res);
});
burgerRouter.delete('/delete/:id', async (req: Request, res: Response): Promise<any> => {
    return await controllerBurger.exclude(req, res);
});


export default burgerRouter;