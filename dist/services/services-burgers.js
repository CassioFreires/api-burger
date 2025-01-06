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
    createService(createBurgerDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const burgersRepository = (yield this.dataBase.connect()).getRepository(entities_burgers_create_1.default);
                const newBurguers = new entities_burgers_create_1.default();
                newBurguers.name = createBurgerDTO.name;
                newBurguers.description = createBurgerDTO.description;
                newBurguers.price = createBurgerDTO.price;
                newBurguers.image_url = createBurgerDTO.image_url;
                return yield burgersRepository.save(newBurguers);
            }
            catch (error) {
                console.error('failed error create burger:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error saving hamburguer to database:', error.message);
                    throw new Error('Failed to create hamburguer');
                }
                else {
                    console.error('Unexpected error in createService:', error);
                    throw new Error('Unexpected error occurred');
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
                console.error('failed error find burger:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error find hamburguer to database:', error.message);
                    throw new Error('Failed to find all hamburguers');
                }
                else {
                    console.error('Unexpected error in getAllHamburguers:', error);
                    throw new Error('Unexpected error occurred');
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
                console.error('failed error find by "id" burger:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error find hamburguer to database:', error.message);
                    throw new Error('Failed to find by "id" hamburguer');
                }
                else {
                    console.error('Unexpected error in "getById" Hamburguer:', error);
                    throw new Error('Unexpected error occurred');
                }
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
                console.error('failed error update by "id" burger:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error update hamburguer to database:', error.message);
                    throw new Error('Failed to update by "id" hamburguer');
                }
                else {
                    console.error('Unexpected error in "update" Hamburguer:', error);
                    throw new Error('Unexpected error occurred');
                }
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
                console.error('failed error delete by "id" burger:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error delete hamburguer to database:', error.message);
                    throw new Error('Failed to delete by "id" hamburguer');
                }
                else {
                    console.error('Unexpected error in "delete" Hamburguer:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
}
exports.default = ServiceBurger;
//# sourceMappingURL=services-burgers.js.map