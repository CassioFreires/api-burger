import LoginDTO from "../dtos/Auth/dto-auth";
export default class AuthService {
    auth(bodyLogin: LoginDTO): Promise<{
        email: string;
        password: string;
    } | null>;
}
