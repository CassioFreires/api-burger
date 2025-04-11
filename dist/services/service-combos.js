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
const entities_combo_get_1 = __importDefault(require("../entities/Combos/entities.combo.get"));
const entities_combo_update_1 = __importDefault(require("../entities/Combos/entities-combo-update"));
const entities_combo_delete_1 = __importDefault(require("../entities/Combos/entities-combo-delete"));
const entities_combo_create_1 = __importDefault(require("../entities/Combos/entities-combo-create"));
class ServiceCombos {
    constructor() {
        this.database = new DataBase_1.default();
    }
    createService(combos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const combosRepository = (yield this.database.connect()).getRepository(entities_combo_create_1.default);
                return yield combosRepository.save(combos);
            }
            catch (error) {
                console.error('failed error create combos:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error saving combos to database:', error.message);
                    throw new Error('Failed to create combos');
                }
                else {
                    console.error('Unexpected error in createCombosService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    getAllService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const combos = (yield this.database.connect()).getRepository(entities_combo_get_1.default).find({
                    order: {
                        combo_id: 'ASC'
                    }
                });
                return combos;
            }
            catch (error) {
                console.error('failed error getAll combos:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error getAll combos to database:', error.message);
                    throw new Error('Failed to getAll combos');
                }
                else {
                    console.error('Unexpected error in getAllCombosService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    getByIdService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const combos = (yield this.database.connect()).getRepository(entities_combo_get_1.default).findOne({
                    where: {
                        combo_id: id
                    }
                });
                return combos;
            }
            catch (error) {
                console.error('failed error get by "id" combos:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error get by "id" combos to database:', error.message);
                    throw new Error('Failed to get by "id" combos');
                }
                else {
                    console.error('Unexpected error in getByIdCombosService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    updateService(id, newCombos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateRepository = (yield this.database.connect()).getRepository(entities_combo_update_1.default);
                const update_combos = yield updateRepository.findOneBy({
                    combo_id: id
                });
                if (update_combos) {
                    update_combos.name = newCombos.name;
                    update_combos.description = newCombos.description;
                    update_combos.price = newCombos.price;
                    yield updateRepository.save(update_combos);
                    console.log('Hamburguer update with successfully');
                    return update_combos;
                }
                else {
                    console.log('Burger not found  for update');
                    return null;
                }
            }
            catch (error) {
                console.error('failed error update combos:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error update combos to database:', error.message);
                    throw new Error('Failed to update combos');
                }
                else {
                    console.error('Unexpected error in UpdateCombosService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
    excludeService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateRepository = (yield this.database.connect()).getRepository(entities_combo_delete_1.default);
                const update_combos = yield updateRepository.findOneBy({ combo_id: id });
                if (update_combos) {
                    yield updateRepository.remove(update_combos);
                    console.log('combos delete with successfully');
                    return update_combos;
                }
                else {
                    console.log('combos not found for deleted');
                    return null;
                }
            }
            catch (error) {
                console.error('failed error delete combos:', error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    console.error('Error delete combos to database:', error.message);
                    throw new Error('Failed to delete combos');
                }
                else {
                    console.error('Unexpected error in deleteCombosService:', error);
                    throw new Error('Unexpected error occurred');
                }
            }
        });
    }
}
exports.default = ServiceCombos;
//# sourceMappingURL=service-combos.js.map