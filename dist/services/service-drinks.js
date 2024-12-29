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
const entites_drinks_1 = __importDefault(require("../entities/Drinks/entites-drinks"));
const entites_drinks_update_1 = __importDefault(require("../entities/Drinks/entites-drinks-update"));
const entities_drinks_delete_1 = __importDefault(require("../entities/Drinks/entities-drinks-delete"));
const entities_drinks_create_1 = __importDefault(require("../entities/Drinks/entities-drinks-create"));
class ServiceDrinks {
    constructor() {
        this.dataBase = new DataBase_1.default();
    }
    createService(drinks) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const drinksRepository = (yield this.dataBase.connect()).getRepository(entities_drinks_create_1.default);
                return yield drinksRepository.save(drinks);
            }
            catch (error) {
                console.error('failed error create drinks:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.log(error.message);
                    return null;
                }
                else {
                    console.error('unexpected error  error create drinks:', error);
                    throw null;
                }
            }
        });
    }
    getAllService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const drinks = (yield this.dataBase.connect()).getRepository(entites_drinks_1.default).find({
                    order: {
                        drink_id: 'ASC'
                    }
                });
                return drinks;
            }
            catch (error) {
                console.error('Failed to all drinks');
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.log(error.message);
                    return null;
                }
                else {
                    console.error('unexpected error find all drinks:', error);
                    throw null;
                }
            }
        });
    }
    getByIdService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const drinks = (yield this.dataBase.connect()).getRepository(entites_drinks_1.default).findOne({
                    where: {
                        drink_id: id
                    }
                });
                return drinks;
            }
            catch (error) {
                console.log('unexpected error find by "id" all drinks', error);
            }
        });
    }
    updateService(id, newDrinks) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateRepository = (yield this.dataBase.connect()).getRepository(entites_drinks_update_1.default);
                const update_drinks = yield updateRepository.findOneBy({
                    drink_id: id
                });
                if (update_drinks) {
                    update_drinks.name = newDrinks.name;
                    update_drinks.description = newDrinks.description;
                    update_drinks.price = newDrinks.price;
                    update_drinks.image_url = newDrinks.image_url;
                    yield updateRepository.save(update_drinks);
                    console.log('Drinks update with successfully');
                    return update_drinks;
                }
                else {
                    console.log('Drinks not found  for update');
                    return null;
                }
            }
            catch (error) {
                console.log('unexpected error update all drinks', error);
                return null;
            }
        });
    }
    excludeService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateRepository = (yield this.dataBase.connect()).getRepository(entities_drinks_delete_1.default);
                const update_drink = yield updateRepository.findOneBy({ drink_id: id });
                if (update_drink) {
                    yield updateRepository.remove(update_drink);
                    console.log('Drinks delete with successfully');
                    return update_drink;
                }
                else {
                    console.log('drinks not found for deleted');
                    return null;
                }
            }
            catch (error) {
                console.log('unexpected error delete all drinks', error);
                return null;
            }
        });
    }
}
exports.default = ServiceDrinks;
//# sourceMappingURL=service-drinks.js.map