import { Request, Response, NextFunction } from "express";
import ServiceUsers from "../services/service-user";

export default class ControllerUsers {
    // serviceUser = new ServiceUsers();

    async register(req:Request, res:Response):Promise<any> {
        try {
            // registrar usuário
        }catch(error){
            console.error(error);
            return res.status(500).json({ message: 'Failed to register user', status: 500 });
        }
    }
}