"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const DataBase_1 = __importDefault(require("../database/DataBase"));
const entities_users_login_1 = __importDefault(require("../entities/Users/entities-users-login"));
const entities_users_get_1 = __importDefault(require("../entities/Users/entities-users-get"));
const entities_users_create_copy_2_1 = __importDefault(require("../entities/Users/entities-users-create copy 2"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const entities_users_update_1 = __importDefault(require("../entities/Users/entities-users-update"));
const entities_users_delete_1 = __importDefault(require("../entities/Users/entities-users-delete"));
class ServiceUsers {
    constructor() {
        this.dataBase = new DataBase_1.default();
    }
    loginService(bodyLogin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Aqui você pode retornar os dados do usuário ou o que for necessário
                const getRepository = (yield this.dataBase.connect()).getRepository(entities_users_login_1.default);
                const user = yield getRepository.findOne({
                    where: {
                        email: bodyLogin.email
                    },
                    relations: ['roles']
                });
                if (!user) {
                    console.log('User not found');
                    return null;
                }
                return user;
            }
            catch (error) {
                console.error('failed error login:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error auth user in database:', error.message);
                    throw new Error('Failed to login');
                }
                else {
                    console.error('Unexpected error in loginService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    registerService(createUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getRepository = (yield this.dataBase.connect()).getRepository(entities_users_create_copy_2_1.default);
                const salt = yield bcryptjs_1.default.genSalt(12);
                const hash = yield bcryptjs_1.default.hash(createUser.password_hash, salt);
                createUser.password_hash = hash;
                getRepository.save(createUser);
                return hash;
            }
            catch (error) {
                console.error('failed error login:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error auth user in database:', error.message);
                    throw new Error('Failed to login');
                }
                else {
                    console.error('Unexpected error in loginService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    getByEmailService(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Aqui você pode retornar os dados do usuário ou o que for necessário
                const getRepository = (yield this.dataBase.connect()).getRepository(entities_users_get_1.default);
                const user = yield getRepository.findOne({
                    where: {
                        email: email
                    }
                });
                return user;
            }
            catch (error) {
                console.error('failed error get user by "id"', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error auth get user by "id" in database:', error.message);
                    throw new Error('Failed to get user by "id"');
                }
                else {
                    console.error('Unexpected error in getUserByIdService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    // crud básico
    getAllService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = (yield this.dataBase.connect()).getRepository(entities_users_login_1.default).find({
                    order: {
                        id: 'ASC'
                    },
                    relations: ['roles']
                });
                return users;
            }
            catch (error) {
                console.error('failed error get all users:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error get all users in database:', error.message);
                    throw new Error('Failed to get all users');
                }
                else {
                    console.error('Unexpected error in getAllService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    getByIdService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = (yield this.dataBase.connect()).getRepository(entities_users_login_1.default).findOne({
                    where: {
                        id: id
                    },
                    relations: ['roles']
                });
                return user;
            }
            catch (error) {
                console.error('failed error get bydId users:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error get bydId users in database:', error.message);
                    throw new Error('Failed to get bydId users');
                }
                else {
                    console.error('Unexpected error in getbydIdService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    updateService(id, newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateRepository = (yield this.dataBase.connect()).getRepository(entities_users_update_1.default);
                const update_user = yield updateRepository.findOneBy({
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
                            return { error: "Role does not exist" }; // Retorna erro caso role_id seja inválido
                        }
                        update_user.role_id = newUser.role_id;
                    }
                    // Verificar se active é 0 ou 1
                    if (newUser.active !== undefined) {
                        if (![0, 1].includes(newUser.active)) {
                            return { error: "Invalid value for active. It should be 0 or 1" }; // Retorna erro caso active seja inválido
                        }
                        update_user.active = newUser.active;
                    }
                    yield updateRepository.save(update_user);
                    console.log('User updated successfully');
                    return update_user;
                }
                else {
                    console.log('User not found  for update');
                    return null;
                }
            }
            catch (error) {
                console.error('failed error update users:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error update users in database:', error.message);
                    throw new Error('Failed to update users');
                }
                else {
                    console.error('Unexpected error in updateService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    excludeService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteRepository = (yield this.dataBase.connect()).getRepository(entities_users_delete_1.default);
                const delete_user = yield deleteRepository.findOneBy({ id: id });
                if (delete_user) {
                    yield deleteRepository.remove(delete_user);
                    console.log('User delete with successfully');
                    return delete_user;
                }
                else {
                    console.log('User not found for deleted');
                    return null;
                }
            }
            catch (error) {
                console.error('failed error delete users:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error delete users in database:', error.message);
                    throw new Error('Failed to delete users');
                }
                else {
                    console.error('Unexpected error in deleteService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
}
exports.default = ServiceUsers;
//# sourceMappingURL=service-user.js.map