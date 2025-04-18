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
const service_combos_1 = __importDefault(require("../services/service-combos"));
const dto_update_combos_1 = __importDefault(require("../dtos/Combos/dto-update-combos"));
const dto_create_combos_1 = __importDefault(require("../dtos/Combos/dto-create.combos"));
const cache_1 = require("../utils/cache");
const cache_2 = require("../utils/cache");
class ControllerCombos {
    constructor() {
        this.serviceCombos = new service_combos_1.default();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, description, price } = req.body;
                if (!name || !description || !price)
                    return res.json({ message: 'you need to fill in all the fields', status: 404 });
                const createCombos = new dto_create_combos_1.default(name, description, price);
                const combos = this.serviceCombos.createService(createCombos);
                if (!combos)
                    return res.json({ message: 'Failed to create combos', status: 404 });
                return res.json({ message: 'create combos with successfully', createCombos });
            }
            catch (error) {
                console.error('Failed to create combos', error);
                return res.status(500).json({ message: 'Failed to create combos', status: 500 });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const combos = yield this.serviceCombos.getAllService();
                if (!combos || combos.length <= 0)
                    return res.json({ message: 'No combos found in the database', status: 404 });
                const cacheCombos = yield (0, cache_1.getFromCache)('combos');
                if (!cacheCombos) {
                    yield (0, cache_2.setFromCache)('combos', combos);
                }
                return res.json({
                    message: 'Find all combos successfully',
                    status: 200,
                    combos: combos // Retorna o array de DTOs no formato esperado
                });
            }
            catch (error) {
                console.error('Failed to find all combos', error);
                return res.status(500).json({ message: 'Failed to find all combos', status: 500 });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const combos = yield this.serviceCombos.getByIdService(Number(id));
                if (!combos)
                    return res.json({ message: 'No combos found in the database', status: 404 });
                return res.json({
                    message: 'find all combos successfully',
                    status: 200,
                    combos: combos
                });
            }
            catch (error) {
                console.error('Failed to find by "id" combos', error);
                return res.status(500).json({ message: 'Failed to find all combos', status: 500 });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const { name, description, price } = req.body;
                if (!name && !description && !price)
                    return res.json({ message: 'you need to at least change one field' });
                const combos = yield this.serviceCombos.getByIdService(Number(id));
                if (!combos || combos == null)
                    return res.json({ message: 'No combos found in the database', status: 404 });
                const combosUpdateDTO = new dto_update_combos_1.default(name, description, price);
                const updatedCombos = yield this.serviceCombos.updateService(Number(id), combosUpdateDTO);
                if (!updatedCombos) {
                    return res.status(404).json({ message: 'combos not found or failed to update', status: 404 });
                }
                console.log(updatedCombos);
                return res.json({
                    message: 'combos updated successfully by ID',
                    status: 200,
                    updatedCombos, // Retorna o hambúrguer atualizado
                });
            }
            catch (error) {
                console.error('Failed to update by "id" combos', error);
                return res.status(500).json({ message: 'Failed to update combos', status: 500 });
            }
        });
    }
    exclude(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const combos = yield this.serviceCombos.getByIdService(Number(id));
                if (!combos || combos == null)
                    return res.json({ message: 'No combos found in the database', status: 404 });
                const deleteCombo = yield this.serviceCombos.excludeService(combos.combo_id);
                if (!deleteCombo) {
                    return res.status(404).json({ message: 'Burger not found or failed to delete', status: 404 });
                }
                return res.json({
                    message: 'Burger deleted successfully by ID',
                    status: 200,
                    deleteCombo, // Retorna o hambúrguer atualizado
                });
            }
            catch (error) {
                console.error('Failed to update by "id" combos', error);
                return res.status(500).json({ message: 'Failed to update combos', status: 500 });
            }
        });
    }
}
exports.default = ControllerCombos;
//# sourceMappingURL=controller-combos.js.map