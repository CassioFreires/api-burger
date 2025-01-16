import { QueryFailedError } from "typeorm";
import DataBase from "../database/DataBase";
import LoginDTO from "../dtos/Users/dto-login-users";
import LoginEntities from "../entities/Users/entities-users-login";
import CreateUserDTO from "../dtos/Users/dto-create-users";
import UserEntities from "../entities/Users/entities-users-get";
import CreateUserEntities from "../entities/Users/entities-users-create copy 2";
import bcrypt from 'bcryptjs';
import UpdateUserEntities from "../entities/Users/entities-users-update";
import UpdateUserDTO from "../dtos/Users/dto-update-users";

export default class ServiceUsers {
    private dataBase: DataBase;

    constructor() {
        this.dataBase = new DataBase();
    }

    async loginService(bodyLogin: LoginDTO): Promise<any> {
        try {
            // Aqui você pode retornar os dados do usuário ou o que for necessário

            const getRepository = (await this.dataBase.connect()).getRepository(LoginEntities);
            const user = await getRepository.findOne({
                where: {
                    email: bodyLogin.email
                },
                relations: ['roles']
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

    async registerService(createUser: CreateUserDTO) {
        try {
            const getRepository = (await this.dataBase.connect()).getRepository(CreateUserEntities);
            const salt: string = await bcrypt.genSalt(12);
            const hash: string = await bcrypt.hash(createUser.password_hash, salt);
            createUser.password_hash = hash;
            getRepository.save(createUser);
            return hash;
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

    async getByEmailService(email: string) {
        try {
            // Aqui você pode retornar os dados do usuário ou o que for necessário
            const getRepository = (await this.dataBase.connect()).getRepository(UserEntities);
            const user = await getRepository.findOne({
                where: {
                    email: email
                }
            })
            return user;
        } catch (error) {
            console.error('failed error get user by "id"', error);
            if (error instanceof QueryFailedError) {
                console.error('Error auth get user by "id" in database:', error.message);
                throw new Error('Failed to get user by "id"');
            } else {
                console.error('Unexpected error in getUserByIdService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

    // crud
    async getAllService() {
        try {
            const users = (await this.dataBase.connect()).getRepository(LoginEntities).find({
                order: {
                    id: 'ASC'
                },
                relations: ['roles']
            })
            return users;
        } catch (error) {
            console.error('failed error get all users:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error get all users in database:', error.message);
                throw new Error('Failed to get all users');
            } else {
                console.error('Unexpected error in getAllService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

    async getByIdService(id: number) {
        try {
            const user = (await this.dataBase.connect()).getRepository(LoginEntities).findOne({
                where: {
                    id: id
                },
                relations: ['roles']
            })
            return user;
        } catch (error) {
            console.error('failed error get bydId users:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error get bydId users in database:', error.message);
                throw new Error('Failed to get bydId users');
            } else {
                console.error('Unexpected error in getbydIdService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

    async updateService(id: number, newUser: UpdateUserDTO) {
        try {
            const updateRepository = (await this.dataBase.connect()).getRepository(UpdateUserEntities);
            const update_user = await updateRepository.findOneBy({
                id: id
            });

            if (update_user) {
                update_user.name = newUser.name;
                update_user.email = newUser.email;
                update_user.password_hash = newUser.password_hash;

                // Verificar se role_id e active estão definidos e são válidos antes de atualizar
                // Verificar se role_id existe na tabela de roles

                // if (newUser.role_id !== undefined) {
                //     const roleRepository = (await this.dataBase.connect()).getRepository(Role); // Supondo que você tenha a entidade Role
                //     const roleExists = await roleRepository.findOneBy({ id: newUser.role_id });

                //     if (!roleExists) {
                //         return { error: "Role does not exist" };  // Retorna erro caso o role_id não exista
                //     }
                //     update_user.role_id = newUser.role_id;
                // }

                // Verificar se active é 0 ou 1

                // if (newUser.active !== undefined) {
                //     if (![0, 1].includes(newUser.active)) {
                //         return { error: "Invalid value for active. It should be 0 or 1" };  // Retorna erro caso active seja inválido
                //     }
                //     update_user.active = newUser.active;
                // }

                // await updateRepository.save(update_user);
                // console.log('User updated successfully');
                // return update_user;

                if (newUser.role_id !== undefined) {
                    if (![1, 2, 3].includes(newUser.role_id)) {
                        return { error: "Role does not exist" };  // Retorna erro caso role_id seja inválido
                    }
                    update_user.role_id = newUser.role_id;
                }

                // Verificar se active é 0 ou 1
                if (newUser.active !== undefined) {
                    if (![0, 1].includes(newUser.active)) {
                        return { error: "Invalid value for active. It should be 0 or 1" };  // Retorna erro caso active seja inválido
                    }
                    update_user.active = newUser.active;
                }
                await updateRepository.save(update_user);
                console.log('User updated successfully');
                return update_user;
            }

            else {
                console.log('User not found  for update');
                return null
            }


        } catch (error) {
            console.error('failed error update users:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error update users in database:', error.message);
                throw new Error('Failed to update users');
            } else {
                console.error('Unexpected error in updateService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

}