import LoginDTO from "../dtos/Users/dto-login-users";
import LoginEntities from "../entities/Users/entities-users-login";
import CreateUserDTO from "../dtos/Users/dto-create-users";
import UserEntities from "../entities/Users/entities-users-get";
import UpdateUserEntities from "../entities/Users/entities-users-update";
import UpdateUserDTO from "../dtos/Users/dto-update-users";
export default class ServiceUsers {
    private dataBase;
    constructor();
    loginService(bodyLogin: LoginDTO): Promise<any>;
    registerService(createUser: CreateUserDTO): Promise<string>;
    getByEmailService(email: string): Promise<UserEntities | null>;
    getAllService(): Promise<LoginEntities[]>;
    getByIdService(id: number): Promise<LoginEntities | null>;
    updateService(id: number, newUser: UpdateUserDTO): Promise<UpdateUserEntities | {
        error: string;
    } | null>;
}
