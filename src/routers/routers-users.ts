import express from 'express';
import { Request, Response, NextFunction } from 'express';
import ControllerUsers from '../controllers/controller-users';

const usersRouter = express.Router();
const controllerUsers = new ControllerUsers();

usersRouter.post('/register', async(req: Request, res: Response) => {
    return await controllerUsers.register(req, res);
})
usersRouter.post('/login', async(req:Request, res:Response) => {
    return await controllerUsers.login(req, res);
});

// 
usersRouter.get('/getAll',  async(req: Request, res: Response) => {
    return await controllerUsers.getAll(req, res);
})
usersRouter.get('/getById/:id',  async(req: Request, res: Response) => {
    return await controllerUsers.getById(req, res);
})
usersRouter.patch('/update/:id',  async(req: Request, res: Response) => {
    return await controllerUsers.update(req, res);
})
usersRouter.delete('/exclude/:id',  async(req: Request, res: Response) => {
    return await controllerUsers.exclude(req, res);
})


export default usersRouter;