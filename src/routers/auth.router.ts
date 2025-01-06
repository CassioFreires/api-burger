import { Request, Response } from "express";
import express from 'express'
import AuthController from "../controllers/controller-auth";

const authRouter = express.Router();
const authController = new AuthController();

authRouter.post('/login', async(req:Request, res: Response): Promise<any> => {
    return await authController.auth(req, res)
});
// authRouter.post('/register', async(req: Request, res:Response): Promise<any> => {
//     return await authController.register(req, res);
// });

export default authRouter;