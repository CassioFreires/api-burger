import LoginDTO from "../dtos/Users/dto-login-users";
export default class ServiceUsers {
    private dataBase;
    constructor();
    login(bodyLogin: LoginDTO): Promise<any>;
    registerService(): Promise<void>;
}
