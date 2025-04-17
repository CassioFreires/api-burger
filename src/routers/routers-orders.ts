import express, { Router, Request, Response } from 'express';
import { AuthMiddleware } from '../middlewares/authMiddleware';
import { RoleMiddleware } from '../middlewares/RoleMiddleware';
import ControllerOrders from '../controllers/controller-orders';

const ordersRouter: Router = express.Router();
const controllerOrders = new ControllerOrders();

// Criação de um pedido
ordersRouter.post('/create', AuthMiddleware, RoleMiddleware(['Admin', 'Funcionário', 'Cliente']), async (req: Request, res: Response): Promise<any> => {
    return await controllerOrders.create(req, res);
});

// Obter o pedido by id
ordersRouter.get('/getById/:idOrder', AuthMiddleware, RoleMiddleware(['Admin', 'Funcionário']), async (req: Request, res: Response): Promise<any> => {
    return await controllerOrders.getAllById(req, res);
});

// Obter todos os pedidos
ordersRouter.get('/getAll', AuthMiddleware, RoleMiddleware(['Admin', 'Funcionário']), async (req: Request, res: Response): Promise<any> => {
    return await controllerOrders.getAll(req, res);
});

// // Atualizar um pedido (Ex: mudar status de um pedido)
ordersRouter.patch('/updateStatus/:id', AuthMiddleware, RoleMiddleware(['Admin', 'Funcionário']), async (req: Request, res: Response): Promise<any> => {
    return await controllerOrders.updateStatus(req, res);
});


// Excluir um pedido
ordersRouter.delete('/delete/:id', AuthMiddleware, RoleMiddleware(['Admin', 'Funcionário']), async (req: Request, res: Response): Promise<any> => {
    return await controllerOrders.exclude(req, res);
});

export default ordersRouter;
