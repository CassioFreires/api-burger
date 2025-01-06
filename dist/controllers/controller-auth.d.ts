import { Request, Response } from "express";
import LoginDTO from "../dtos/Auth/dto-auth";
import InterfaceResponseLogin from "../interfaces/Auth/interface-response-auth";
import AuthService from "../services/service-login";
export default class AuthController {
    authService: AuthService;
    constructor();
    auth(req: Request, res: Response): Promise<Response<InterfaceResponseLogin | LoginDTO>>;
}
