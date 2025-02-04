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
            console.log(userId);
            try {
                const getAddress = (yield this.database.connect()).getRepository(entities_address_get_1.default);
                return yield getAddress.findOne({
                    where: {
                        user_id: userId,
                    }
                });
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
}
exports.default = ServiceAddress;
//# sourceMappingURL=service-address.js.map