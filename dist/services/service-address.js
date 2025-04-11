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
const DataBase_1 = __importDefault(require("../database/DataBase"));
const typeorm_1 = require("typeorm");
const entities_address_create_1 = __importDefault(require("../entities/Address/entities-address-create"));
const entities_address_get_1 = __importDefault(require("../entities/Address/entities-address.get"));
const entities_address_update_1 = __importDefault(require("../entities/Address/entities-address-update"));
const entities_address_delete_1 = __importDefault(require("../entities/Address/entities-address-delete"));
class ServiceAddress {
    constructor() {
        this.database = new DataBase_1.default();
    }
    createService(address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getAddress = (yield this.database.connect()).getRepository(entities_address_create_1.default);
                return yield getAddress.save(address);
            }
            catch (error) {
                console.error('failed error create address:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error saving address to database:', error.message);
                    throw new Error('Failed to create address');
                }
                else {
                    console.error('Unexpected error in createAddressService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    getAddressUserByIdService(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getAddress = (yield this.database.connect()).getRepository(entities_address_get_1.default);
                const address = yield getAddress.findOne({
                    where: {
                        user_id: userId,
                    }
                });
                if (!address || address == null) {
                    console.log('O usuário não esta cadastrado no endereço');
                    return null;
                }
                return address;
            }
            catch (error) {
                console.error('failed error get address user by id address:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error saving get address user by id to database:', error.message);
                    throw new Error('Failed to get address user by id address');
                }
                else {
                    console.error('Unexpected error in getAddressUserByIdService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    updateAddressService(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addressRepository = (yield this.database.connect()).getRepository(entities_address_update_1.default);
                const address = yield this.getAddressUserByIdService(userId);
                if (!address) {
                    return null; // Endereço não encontrado
                }
                // Atualiza os campos do endereço com os dados fornecidos
                Object.assign(address, data); // Preenche os campos existentes com os dados fornecidos
                const updatedAddress = yield addressRepository.save(address); // Salva o endereço atualizado
                return updatedAddress; // Retorna o endereço atualizado
            }
            catch (error) {
                console.error('Error updating address:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error updating address in database:', error.message);
                    throw new Error('Failed to update address');
                }
                else {
                    console.error('Unexpected error in updateAddressService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    // Deletar um endereço
    excludeService(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateRepository = (yield this.database.connect()).getRepository(entities_address_delete_1.default);
                const update_address = yield updateRepository.findOneBy({ user_id: userId });
                if (update_address) {
                    yield updateRepository.remove(update_address);
                    console.log('address delete with successfully');
                    return update_address;
                }
                else {
                    console.log('address not found for deleted');
                    return null;
                }
            }
            catch (error) {
                console.error('failed error delete address:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error delete address to database:', error.message);
                    throw new Error('Failed Fo delete address');
                }
                else {
                    console.error('Unexpected error in deleteaddressService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
}
exports.default = ServiceAddress;
//# sourceMappingURL=service-address.js.map