import { QueryFailedError } from "typeorm";
import DataBase from "../database/DataBase";
import LoginDTO from "../dtos/Users/dto-login-users";
import LoginEntities from "../entities/Users/entities-users-login";
import { LoginResponseDTO } from "../dtos/Users/dto-login-response";

export default class ServiceUsers {
    private dataBase:DataBase;

    constructor(){
        this.dataBase = new DataBase();
    }

    async login(bodyLogin: LoginDTO): Promise<any> {
        try {
            // Aqui você pode retornar os dados do usuário ou o que for necessário
            
            const getRepository = (await this.dataBase.connect()).getRepository(LoginEntities);
            const user = await getRepository.findOne({
                where: {
                    email: bodyLogin.email
                },
                relations:['roles']
            })
            return user;
        } catch (error) {
            console.error('failed error login:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error auth user in database:', error.message);
                throw new Error('Failed to login');
            } else {
                console.error('Unexpected error in loginService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

    async registerService() {
        try {

        } catch (error) {

        }
    }
}