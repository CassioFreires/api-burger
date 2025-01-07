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
const entites_promo_get_1 = __importDefault(require("../entities/Promotions/entites-promo-get"));
const entities_promo_create_1 = __importDefault(require("../entities/Promotions/entities-promo-create"));
const entites_promo_update_1 = __importDefault(require("../entities/Promotions/entites-promo-update"));
const entities_promo_delete_1 = __importDefault(require("../entities/Promotions/entities-promo-delete"));
class ServicePromocoes {
    constructor() {
        this.dataBase = new DataBase_1.default();
    }
    createService(promotions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const promotionsRepository = (yield this.dataBase.connect()).getRepository(entities_promo_create_1.default);
                return yield promotionsRepository.save(promotions);
            }
            catch (error) {
                console.error('failed error create promotions:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error saving promotions to database:', error.message);
                    throw new Error('Failed to create promotions');
                }
                else {
                    console.error('Unexpected error in createPromotionsService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    getAllService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const burgers = (yield this.dataBase.connect()).getRepository(entites_promo_get_1.default).find({
                    order: {
                        promotion_id: 'ASC'
                    }
                });
                return burgers;
            }
            catch (error) {
                console.error('Failed to all promotions');
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.log(error.message);
                    return null;
                }
                else {
                    console.error('unexpected error find all promotions:', error);
                    throw null;
                }
            }
        });
    }
    getByIdService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const promotions = (yield this.dataBase.connect()).getRepository(entites_promo_get_1.default).findOne({
                    where: {
                        promotion_id: id
                    }
                });
                return promotions;
            }
            catch (error) {
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error find by "id" promotions to database:', error.message);
                    throw new Error('Failed to find by "id" promotions');
                }
                else {
                    console.error('Unexpected error in getByIdPromotions:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    updateService(id, newPromotions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateRepository = (yield this.dataBase.connect()).getRepository(entites_promo_update_1.default);
                const update_promotions = yield updateRepository.findOneBy({
                    promotion_id: id
                });
                if (update_promotions) {
                    update_promotions.name = newPromotions.name;
                    update_promotions.description = newPromotions.description;
                    update_promotions.price = newPromotions.price;
                    update_promotions.image_url = newPromotions.image_url;
                    yield updateRepository.save(update_promotions);
                    console.log('Promotions update with successfully');
                    return update_promotions;
                }
                else {
                    console.log('Promotions not found  for update');
                    return null;
                }
            }
            catch (error) {
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error find by "id" promotions to database:', error.message);
                    throw new Error('Failed to find by "id" promotions');
                }
                else {
                    console.error('Unexpected error in getByIdPromotions:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    excludeService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateRepository = (yield this.dataBase.connect()).getRepository(entities_promo_delete_1.default);
                const delete_promotions = yield updateRepository.findOneBy({ promotion_id: id });
                console.log(delete_promotions);
                if (delete_promotions) {
                    yield updateRepository.remove(delete_promotions);
                    console.log('Promotions delete with successfully');
                    return delete_promotions;
                }
                else {
                    console.log('Promotions not found for deleted');
                    return null;
                }
            }
            catch (error) {
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error find by "id" promotions to database:', error.message);
                    throw new Error('Failed to find by "id" promotions');
                }
                else {
                    console.error('Unexpected error in getByIdPromotions:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
}
exports.default = ServicePromocoes;
//# sourceMappingURL=service-promocoes.js.map