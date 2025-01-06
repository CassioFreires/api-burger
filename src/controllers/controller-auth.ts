import { Request, Response } from "express";
import LoginDTO from "../dtos/Auth/dto-auth";
import InterfaceResponseLogin from "../interfaces/Auth/interface-response-auth";
import AuthService from "../services/service-login";

export default class AuthController {
    authService:AuthService;

    constructor(){
        this.authService = new AuthService();
    }

    async auth(req: Request, res: Response): Promise<Response<InterfaceResponseLogin | LoginDTO>> {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.json({ message: 'Invalid Login', status: 401 });
            }
    
            const loginDto = new LoginDTO(email, password);
            const response = await this.authService.auth(loginDto);
    
            // Se a resposta for válida, retorne sucesso
            if (response) {
                return res.json({ message: 'login OK', status: 201 });
            } else {
                // Se não for válida (por exemplo, se a resposta for null), trate o erro
                return res.json({ message: 'Invalid credentials', status: 401 });
            }
    
        } catch (error) {
            // Lidar com erros de forma consistente
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error', status: 500 });
        }
    }

    // async register(req: Request, res: Response) {
    //     try {
    //         // const { email, password, name, role_id } = req.body;
    //         // const userDto = new CreateUserDto(email, password, name, role_id);
    //         // const response = await authService.register(userDto);
    //         // res.json(response);
    //     } catch (error) {
    //         // res.status(400).json({ message: error.message });
    //     }
    // }
}