import DataBase from "../database/DataBase";
import { QueryFailedError } from "typeorm";
import LoginDTO from "../dtos/Auth/dto-auth";

export default class AuthService {
    // dataBase: DataBase;

    // Ajuste o tipo de retorno para ser um objeto específico ou `null`
    async auth(bodyLogin: LoginDTO): Promise<{ email: string, password: string } | null> {
        try {
            // Aqui você pode retornar os dados do usuário ou o que for necessário
            return { email: 'cassio', password: 'teste' };
        } catch (error) {
            console.error('Failed to all promotions');
            if (error instanceof QueryFailedError) {
                console.log(error.message);
                return null;
            } else {
                console.error('unexpected error:', error);
                throw error; // Aqui você pode jogar o erro para cima, em vez de retornar null
            }
        }
    }
}