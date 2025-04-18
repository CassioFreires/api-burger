import express from 'express';
import { Request, Response } from 'express';
import ControllerUsers from '../controllers/controller-users';
import { AuthMiddleware } from '../middlewares/authMiddleware';
import { RoleMiddleware } from '../middlewares/RoleMiddleware';

const usersRouter = express.Router();
const controllerUsers = new ControllerUsers();

usersRouter.post('/register', async(req: Request, res: Response) => {
    return await controllerUsers.register(req, res);
})
usersRouter.post('/login', async(req:Request, res:Response) => {
    return await controllerUsers.login(req, res);
});

usersRouter.post('/verify-2fa', async(req:Request, res:Response) => {
    return await controllerUsers.verify2fa(req, res);
});

// 
usersRouter.get('/getAll', AuthMiddleware, RoleMiddleware(['Admin']),  async(req: Request, res: Response) => {
    return await controllerUsers.getAll(req, res);
})
usersRouter.get('/getById/:id', AuthMiddleware, RoleMiddleware(['Admin']),   async(req: Request, res: Response) => {
    return await controllerUsers.getById(req, res);
})
usersRouter.patch('/update/:id', AuthMiddleware, RoleMiddleware(['Admin']),   async(req: Request, res: Response) => {
    return await controllerUsers.update(req, res);
})
usersRouter.delete('/exclude/:id', AuthMiddleware, RoleMiddleware(['Admin']),   async(req: Request, res: Response) => {
    return await controllerUsers.exclude(req, res);
})


export default usersRouter;