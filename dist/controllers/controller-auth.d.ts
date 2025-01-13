import { Request, Response } from "express";
import LoginDTO from "../dtos/Auth/dto-auth";
import InterfaceResponseLogin from "../interfaces/Auth/interface-response-auth";
export default class AuthController {
    private authService;
    constructor();
    auth(req: Request, res: Response): Promise<Response<InterfaceResponseLogin | LoginDTO>>;
}
