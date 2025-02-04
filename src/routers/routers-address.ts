import express from 'express';
import { AuthMiddleware } from '../middlewares/authMiddleware';
import { RoleMiddleware } from '../middlewares/RoleMiddleware';
import { Response, Request } from 'express';
import ControllerAddress from '../controllers/controller-address';

const addressRouter = express.Router();
const controllerAddress = new ControllerAddress();

addressRouter.post('/create',  AuthMiddleware, RoleMiddleware(['Cliente','Admin', 'Funcionário']), async (req: Request, res: Response): Promise<any> => {
    return await controllerAddress.create(req, res);
});
addressRouter.get('/getByUserId',  AuthMiddleware, RoleMiddleware(['Cliente','Admin', 'Funcionário']), async (req: Request, res: Response): Promise<any> => {
    return await controllerAddress.getByUserId(req, res);
});


export default addressRouter;