import { Request, Response, NextFunction } from "express";
import ServiceUsers from "../services/service-user";
import LoginDTO from "../dtos/Users/dto-login-users";

export default class ControllerUsers {
    private serviceUser = new ServiceUsers();
    async login(req: Request, res: Response): Promise<any> {
        try {
            const { email, password_hash } = req.body;
            if (!email || !password_hash) {
                return res.json({ message: 'Invalid Login', status: 401 });
            }

            const loginDto = new LoginDTO(email, password_hash);
            const response = await this.serviceUser.login(loginDto);

            if(!response || response.password_hash !== password_hash) {
                return res.json({ message: 'Invalid credentials', status: 401 })
            }

            // generateToken()
            return res.json({ message: 'login OK', status: 201, response });
            

        } catch (error) {
            // Lidar com erros de forma consistente
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error', status: 500 });
        }
    }
    async register(req: Request, res: Response): Promise<any> {
        try {
            // registrar usuário
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to register user', status: 500 });
        }
    }
    async getAll(req: Request, res: Response): Promise<any> {
        try {
            // registrar usuário
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to getAll user', status: 500 });
        }
    }
    async getById(req: Request, res: Response): Promise<any> {
        try {
            // registrar usuário
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to get by "id" user', status: 500 });
        }
    }
    async update(req: Request, res: Response): Promise<any> {
        try {
            // registrar usuário
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to update user', status: 500 });
        }
    }
    async exclude(req: Request, res: Response): Promise<any> {
        try {
            // registrar usuário
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to delete user', status: 500 });
        }
    }
}