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
const service_promocoes_1 = __importDefault(require("../services/service-promocoes"));
const dto_create_promo_1 = __importDefault(require("../dtos/Promotions/dto-create-promo"));
const dto_update_promo_1 = __importDefault(require("../dtos/Promotions/dto-update-promo"));
const cache_1 = require("../utils/cache");
const cache_2 = require("../utils/cache");
class ControllersPromocoes {
    constructor() {
        this.servicePromotions = new service_promocoes_1.default();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, description, price, image_url } = req.body;
                if (!name || !description || !price || !image_url)
                    return res.json({ message: 'you need to fill in all the fields', status: 404 });
                const createPromotions = new dto_create_promo_1.default(name, description, description, image_url);
                const promotions = this.servicePromotions.createService(createPromotions);
                if (!promotions)
                    return res.json({ message: 'Failed to create promotions', status: 404 });
                return res.json({ message: 'create promotions with successfully', promotions });
            }
            catch (error) {
                console.error('Failed to create promotions', error);
                return res.status(500).json({ message: 'Failed to create promotions', status: 500 });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const promotions = yield this.servicePromotions.getAllService();
                if (!promotions || promotions.length <= 0)
                    return res.json({ message: 'No promotions found in the database', status: 404 });
                const cachePromotoions = yield (0, cache_1.getFromCache)('promoções');
                if (!cachePromotoions) {
                    yield (0, cache_2.setFromCache)('promoções', promotions);
                }
                return res.json({
                    message: 'Find all promotions successfully',
                    status: 200,
                    promotions // Retorna o array de DTOs no formato esperado
                });
            }
            catch (error) {
                console.error('Failed to find all promotions', error);
                return res.status(500).json({ message: 'Failed to find all promotions', status: 500 });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const promotions = yield this.servicePromotions.getByIdService(1);
                if (!promotions)
                    return res.json({ message: 'No promotions found in the database', status: 404 });
                return res.json({
                    message: 'find all promotions successfully',
                    status: 200,
                    data: promotions
                });
            }
            catch (error) {
                console.error('Failed to find by "id" promotions', error);
                return res.status(500).json({ message: 'Failed to find all promotions', status: 500 });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const { name, description, price, image_url } = req.body;
                if (!name && !description && !price && !image_url)
                    return res.json({ message: 'you need to at least change one field' });
                const promotions = yield this.servicePromotions.getByIdService(Number(id));
                if (!promotions || promotions == null)
                    return res.json({ message: 'No promotions found in the database', status: 404 });
                const promotionsUpdateDTO = new dto_update_promo_1.default(name, description, price, image_url);
                const updatePromotions = yield this.servicePromotions.updateService(Number(id), promotionsUpdateDTO);
                if (!updatePromotions) {
                    return res.status(404).json({ message: 'Promotions not found or failed to update', status: 404 });
                }
                return res.json({
                    message: 'Promotions updated successfully by ID',
                    status: 200,
                    updatePromotions, // Retorna o hambúrguer atualizado
                });
            }
            catch (error) {
                console.error('Failed to update by "id" promotions', error);
                return res.status(500).json({ message: 'Failed to update promotions', status: 500 });
            }
        });
    }
    exclude(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const promotions = yield this.servicePromotions.getByIdService(Number(id));
                if (!promotions || promotions == null)
                    return res.json({ message: 'No promotions found in the database', status: 404 });
                const deletePromotions = yield this.servicePromotions.excludeService(Number(id));
                if (!deletePromotions) {
                    return res.status(404).json({ message: 'Promotions not found or failed to delete', status: 404 });
                }
                return res.json({
                    message: 'Promotions deleted successfully by ID',
                    status: 200,
                    deletePromotions, // Retorna o hambúrguer atualizado
                });
            }
            catch (error) {
                console.error('Failed to update by "id" promotions', error);
                return res.status(500).json({ message: 'Failed to update promotions', status: 500 });
            }
        });
    }
}
exports.default = ControllersPromocoes;
//# sourceMappingURL=controllers-promocoes.js.map