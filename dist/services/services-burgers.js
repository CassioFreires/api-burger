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
const entites_burgers_1 = __importDefault(require("../entities/Burgers/entites-burgers"));
const typeorm_1 = require("typeorm");
const entites_burgers_update_1 = __importDefault(require("../entities/Burgers/entites-burgers-update"));
const dto_delete_burgers_1 = __importDefault(require("../dtos/Burgers/dto-delete-burgers"));
const entities_burgers_create_1 = __importDefault(require("../entities/Burgers/entities-burgers-create"));
class ServiceBurger {
    constructor() {
        this.dataBase = new DataBase_1.default();
    }
    createService(burger) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(burger);
                const burgersRepository = (yield this.dataBase.connect()).getRepository(entities_burgers_create_1.default);
                return yield burgersRepository.save(burger);
            }
            catch (error) {
                console.error('failed error create burger:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.log(error.message);
                    return null;
                }
                else {
                    console.error('unexpected error  error create burger:', error);
                    throw null;
                }
            }
        });
    }
    getAllService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const burgers = (yield this.dataBase.connect()).getRepository(entites_burgers_1.default).find({
                    order: {
                        id: 'ASC'
                    }
                });
                return burgers;
            }
            catch (error) {
                console.error('Failed to all burger');
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.log(error.message);
                    return null;
                }
                else {
                    console.error('unexpected error find all burgers:', error);
                    throw null;
                }
            }
        });
    }
    getByIdService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const burgers = (yield this.dataBase.connect()).getRepository(entites_burgers_1.default).findOne({
                    where: {
                        id: id
                    }
                });
                return burgers;
            }
            catch (error) {
                console.log('unexpected error find by "id" all burgers', error);
            }
        });
    }
    updateService(id, newBurger) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateRepository = (yield this.dataBase.connect()).getRepository(entites_burgers_update_1.default);
                const update_burger = yield updateRepository.findOneBy({
                    id: id
                });
                if (update_burger) {
                    update_burger.name = newBurger.name;
                    update_burger.description = newBurger.description;
                    update_burger.price = newBurger.price;
                    update_burger.image_url = newBurger.image_url;
                    yield updateRepository.save(update_burger);
                    console.log('Hamburguer update with successfully');
                    return update_burger;
                }
                else {
                    console.log('Burger not found  for update');
                    return null;
                }
            }
            catch (error) {
                console.log('unexpected error update all burgers', error);
                return null;
            }
        });
    }
    excludeService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateRepository = (yield this.dataBase.connect()).getRepository(dto_delete_burgers_1.default);
                const update_burger = yield updateRepository.findOneBy({ id: id });
                if (update_burger) {
                    yield updateRepository.remove(update_burger);
                    console.log('Hamburguer delete with successfully');
                    return update_burger;
                }
                else {
                    console.log('Burger not found for deleted');
                    return null;
                }
            }
            catch (error) {
                console.log('unexpected error delete all burgers', error);
                return null;
            }
        });
    }
}
exports.default = ServiceBurger;
//# sourceMappingURL=services-burgers.js.map