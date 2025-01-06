import express from 'express';
import { Request, Response, NextFunction } from 'express';
import ControllerUsers from '../controllers/controller-users';

const usersRouter = express.Router();
const controllerUsers = new ControllerUsers();

usersRouter.post('/register', async(req: Request, res: Response) => {
    return await controllerUsers.register(req, res);
})


export default usersRouter;