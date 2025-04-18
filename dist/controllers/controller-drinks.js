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
const service_drinks_1 = __importDefault(require("../services/service-drinks"));
const dto_update_drinks_1 = __importDefault(require("../dtos/Drinks/dto-update-drinks"));
const dto_create_drinks_1 = __importDefault(require("../dtos/Drinks/dto-create-drinks"));
const cache_1 = require("../utils/cache");
const cache_2 = require("../utils/cache");
class ControllerDrinks {
    constructor() {
        this.serviceDrinks = new service_drinks_1.default();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, description, price, image_url } = req.body;
                if (!name || !description || !price || !image_url)
                    return res.json({ message: 'you need to fill in all the fields', status: 404 });
                const createDrinks = new dto_create_drinks_1.default(name, description, price, image_url);
                const drinks = this.serviceDrinks.createService(createDrinks);
                if (!drinks)
                    return res.json({ message: 'Failed to create drinks', status: 404 });
                return res.json({ message: 'create drinks with successfully', createDrinks });
            }
            catch (error) {
                console.error('Failed to create drinks', error);
                return res.status(500).json({ message: 'Failed to create drinks', status: 500 });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const drinks = yield this.serviceDrinks.getAllService();
                if (!drinks || drinks.length <= 0)
                    return res.json({ message: 'No drinks found in the database', status: 404 });
                const cacheDrinks = yield (0, cache_1.getFromCache)('bebidas');
                if (!cacheDrinks) {
                    yield (0, cache_2.setFromCache)('bebidas', drinks);
                }
                return res.json({
                    message: 'Find all drinks successfully',
                    status: 200,
                    drinks: drinks // Retorna o array de DTOs no formato esperado
                });
            }
            catch (error) {
                console.error('Failed to find all drinks', error);
                return res.status(500).json({ message: 'Failed to find all drinks', status: 500 });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const drinks = yield this.serviceDrinks.getByIdService(Number(id));
                if (!drinks)
                    return res.json({ message: 'No drinks found in the database', status: 404 });
                return res.json({
                    message: 'find all drinks successfully',
                    status: 200,
                    drinks: drinks
                });
            }
            catch (error) {
                console.error('Failed to find by "id" drinks', error);
                return res.status(500).json({ message: 'Failed to find all drinks', status: 500 });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const { name, description, price, img_url } = req.body;
                if (!name && !description && !price && !img_url)
                    return res.json({ message: 'you need to at least change one field' });
                const drinks = yield this.serviceDrinks.getByIdService(Number(id));
                if (!drinks || drinks == null)
                    return res.json({ message: 'No drinks found in the database', status: 404 });
                const drinksUpdateDTO = new dto_update_drinks_1.default(name, description, price, img_url);
                const drinksUpdate = yield this.serviceDrinks.updateService(Number(id), drinksUpdateDTO);
                if (!drinksUpdate) {
                    return res.status(404).json({ message: 'drinks not found or failed to update', status: 404 });
                }
                return res.json({
                    message: 'drinks updated successfully by ID',
                    status: 200,
                    drinksUpdate, // Retorna o drink atualizado
                });
            }
            catch (error) {
                console.error('Failed to update by "id" drinks', error);
                return res.status(500).json({ message: 'Failed to update drinks', status: 500 });
            }
        });
    }
    exclude(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const drinks = yield this.serviceDrinks.getByIdService(Number(id));
                if (!drinks || drinks == null)
                    return res.json({ message: 'No drinks found in the database', status: 404 });
                const deleteCombo = yield this.serviceDrinks.excludeService(drinks.drink_id);
                if (!deleteCombo) {
                    return res.status(404).json({ message: 'Drinks not found or failed to delete', status: 404 });
                }
                return res.json({
                    message: 'Drinks deleted successfully by ID',
                    status: 200,
                    deleteCombo, // Retorna o Drink atualizado
                });
            }
            catch (error) {
                console.error('Failed to update by "id" drinks', error);
                return res.status(500).json({ message: 'Failed to update drinks', status: 500 });
            }
        });
    }
}
exports.default = ControllerDrinks;
//# sourceMappingURL=controller-drinks.js.map