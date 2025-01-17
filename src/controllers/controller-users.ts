import { Request, Response, NextFunction } from "express";
import ServiceUsers from "../services/service-user";
import LoginDTO from "../dtos/Users/dto-login-users";
import { generateToken } from "../utils/authUtils";
import CreateUserDTO from "../dtos/Users/dto-create-users";
import bcrypt from 'bcryptjs';
import UpdateUserDTO from "../dtos/Users/dto-update-users";

export default class ControllerUsers {
    private serviceUser: ServiceUsers;

    constructor() {
        this.serviceUser = new ServiceUsers();
    }

    async login(req: Request, res: Response): Promise<any> {
        try {
            const { email, password_hash } = req.body;

            console.log(req.body)
            
            if (!email || !password_hash) {
                return res.json({ message: 'Invalid Login', status: 401 });
            }

            const loginDto = new LoginDTO(email, password_hash);

            const response = await this.serviceUser.loginService(loginDto);
            if(!response || response == null) return res.status(401).json({message:'Invalid creadentials', status: 401});
            
            // comparando a senha do formulario com a criptgrafada que está na base
            const isPasswordEquals: boolean = await bcrypt.compare(password_hash, response.password_hash);

            if (!isPasswordEquals) return res.json({ message: 'Invalid credentials', status: 401 })

            const token = generateToken({ id: response.id, name: response.name, email: response.email, roles: response.role_name });

            res.json({ message: 'login OK', status: 201, response, token });

            return token;

        } catch (error) {
            // Lidar com erros de forma consistente
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error', status: 500 });
        }
    }

    async register(req: Request, res: Response): Promise<any> {
        try {
            // registrar usuário
            const { name, email, password_hash, confirm_password } = req.body;

            if (!name || !email || !password_hash || !confirm_password) return res.status(401).json({ message: 'You need to fill all fields' });

            if (password_hash !== confirm_password) return res.status(401).json({ message: 'Passwords are not the same' });

            // modelo do usuário
            const newCreateUser = new CreateUserDTO(name, email, password_hash);

            // busca o usuário na base
            const getUser = await this.serviceUser.getByEmailService(newCreateUser.email);

            if (getUser) return res.status(401).json({ message: 'This e-mail already exist', status: 401 });

            const create = this.serviceUser.registerService(newCreateUser);

            return res.status(201).json({ message: 'User created successfully', status: 201, create })

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to register user', status: 500 });
        }
    }

    async getAll(req: Request, res: Response): Promise<any> {
        try {
            const users = await this.serviceUser.getAllService();
            if (!users) return res.status(401).json({ message: "Users not found", status: 401 });
            return res.json({ message: 'Get all users successfully', users });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to getAll user', status: 500 });
        }
    }
    async getById(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            if (!id || isNaN(Number(id))) return res.status(401).json({ message: '"id" user invalid', status: 401 });
            const user = await this.serviceUser.getByIdService(Number(id));
            if (!user) return res.status(401).json({ message: 'User not found by id', status: 401 });
            return res.json({ message: 'User find by id successfully', status: 401, user });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to get by "id" user', status: 500 });
        }
    }
    async update(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const { name, email, password_hash, role_id, active } = req.body;

            if (!id || isNaN(Number(id))) return res.status(401).json({ message: 'id invalid', status: 401 });
            if (!name && !email && !password_hash && !role_id && !active) return res.status(401).json({ message: "You need to fill at least one field", status: 401 });

            const updateUserDTO = new UpdateUserDTO(
                name,
                email,
                password_hash,
                role_id !== undefined ? role_id : undefined,
                active !== undefined ? active : undefined
            );

            const updateUser = await this.serviceUser.updateService(Number(id), updateUserDTO);            
            
            if (!updateUser || updateUser == null) return res.status(401).json({ message: 'Error during the update user', status: 401 });

            return res.json({ message: "Update User successfully", updateUserDTO });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to update user', status: 500 });
        }
    }
    async exclude(req: Request, res: Response): Promise<any> {
        try {
            const {id} = req.params;
            if(!id || isNaN(Number(id))) return res.status(401).json({message: 'id invalid', status:401});
            const deleteUser = await this.serviceUser.excludeService(Number(id));
            if(!deleteUser || deleteUser == null) return res.status(401).json({message:'User not found for delete'});
            return res.json({message: 'User deleted successfully', deleteUser});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to delete user', status: 500 });
        }
    }

}