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

// Obter todos os pedidos
ordersRouter.get('/getAll', AuthMiddleware, RoleMiddleware(['Admin', 'Funcionário']), async (req: Request, res: Response): Promise<any> => {
    return await controllerOrders.getAll(req, res);
});

// // Atualizar um pedido (Ex: mudar status de um pedido)
ordersRouter.patch('/updateStatus/:id', AuthMiddleware, RoleMiddleware(['Admin', 'Funcionário']), async (req: Request, res: Response): Promise<any> => {
    return await controllerOrders.updateStatus(req, res);
});

// // Obter pedido por ID
// ordersRouter.get('/getById/:id', AuthMiddleware, async (req: Request, res: Response): Promise<any> => {
//     return await controllerOrders.getById(req, res);
// });

// // Atualizar um pedido (Ex: mudar status de um pedido)
// ordersRouter.patch('/update/:id', AuthMiddleware, RoleMiddleware(['Admin']), async (req: Request, res: Response): Promise<any> => {
//     return await controllerOrders.update(req, res);
// });

// // Excluir um pedido
// ordersRouter.delete('/delete/:id', AuthMiddleware, RoleMiddleware(['Admin']), async (req: Request, res: Response): Promise<any> => {
//     return await controllerOrders.exclude(req, res);
// });

export default ordersRouter;
