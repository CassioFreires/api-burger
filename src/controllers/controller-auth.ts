import { Request, Response } from "express";

export default class AuthController {
    async login(req: Request, res: Response): Promise<any> {
        try {
            // const loginDto = new LoginDto(req.body.email, req.body.password);
            // const response = await authService.login(loginDto);
            // res.json(response);
        } catch (error) {
            // res.status(400).json({ message: error.message });
        }
    }

    async register(req: Request, res: Response) {
        try {
            // const { email, password, name, role_id } = req.body;
            // const userDto = new CreateUserDto(email, password, name, role_id);
            // const response = await authService.register(userDto);
            // res.json(response);
        } catch (error) {
            // res.status(400).json({ message: error.message });
        }
    }
}