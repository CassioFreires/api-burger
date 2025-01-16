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
const services_burgers_1 = __importDefault(require("../services/services-burgers"));
const dto_burgers_1 = require("../dtos/Burgers/dto-burgers");
const dto_update_burgers_1 = __importDefault(require("../dtos/Burgers/dto-update-burgers"));
const dto_create_burgers_1 = __importDefault(require("../dtos/Burgers/dto-create-burgers"));
const dto_delete_burgers_1 = __importDefault(require("../dtos/Burgers/dto-delete-burgers"));
class ControllerBurger {
    constructor() {
        this.serviceBurger = new services_burgers_1.default();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, description, price, image_url } = req.body;
                if (!name || !description || !price || !image_url)
                    return res.json({ message: 'you need to fill in all the fields', status: 404 });
                const createBurgersDTO = new dto_create_burgers_1.default(name, description, price, image_url);
                const burgers = this.serviceBurger.createService(createBurgersDTO);
                if (!burgers)
                    return res.json({ message: 'Failed to create burger', status: 404 });
                return res.json({ message: 'create burger with successfully', burgers });
            }
            catch (error) {
                console.error('Failed to create burger', error);
                return res.status(500).json({ message: 'Failed to create burgers', status: 500, error });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const burgers = yield this.serviceBurger.getAllService();
                if (!burgers || burgers.length <= 0)
                    return res.json({ message: 'No burgers found in the database', status: 404 });
                return res.json({
                    message: 'Find all burgers successfully',
                    status: 200,
                    burgers // Retorna o array de DTOs no formato esperado
                });
            }
            catch (error) {
                console.error('Failed to find all burgers', error);
                return res.status(500).json({ message: 'Failed to find all burgers', status: 500, error });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const burgers = yield this.serviceBurger.getByIdService(Number(id));
                if (!burgers)
                    return res.json({ message: 'No burgers found in the database', status: 404 });
                const burgersDTO = new dto_burgers_1.BurgersDTO(burgers.id, burgers.name, burgers.description, burgers.price, burgers.image_url);
                return res.json({
                    message: 'find all burgers successfully',
                    status: 200,
                    burgersDTO
                });
            }
            catch (error) {
                console.error('Failed to find by "id" burgers', error);
                return res.status(500).json({ message: 'Failed to find all burgers', status: 500 });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const { name, price, image_url, description } = req.body;
                if (!name && !price && !image_url && !description)
                    return res.json({ message: 'you need to at least change one field' });
                const burgers = yield this.serviceBurger.getByIdService(5);
                if (!burgers || burgers == null)
                    return res.json({ message: 'No burgers found in the database', status: 404 });
                const burgersUpdateDTO = new dto_update_burgers_1.default(name, description, price, image_url);
                const updatedBurger = yield this.serviceBurger.updateService(Number(id), burgersUpdateDTO);
                if (!updatedBurger) {
                    return res.status(404).json({ message: 'Burger not found or failed to update', status: 404 });
                }
                console.log(updatedBurger);
                return res.json({
                    message: 'Burger updated successfully by ID',
                    status: 200,
                    updatedBurger, // Retorna o hambúrguer atualizado
                });
            }
            catch (error) {
                console.error('Failed to update by "id" burgers', error);
                return res.status(500).json({ message: 'Failed to update burgers', status: 500 });
            }
        });
    }
    exclude(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id)))
                    return res.send({ message: 'ID card invalid' });
                const burgers = yield this.serviceBurger.getByIdService(1000);
                if (!burgers || burgers == null)
                    return res.json({ message: 'No burgers found in the database', status: 404 });
                const newDeleteBurger = new dto_delete_burgers_1.default(burgers.id, burgers.name, burgers.description, burgers.price, burgers.image_url);
                const deleteBurger = yield this.serviceBurger.excludeService(Number(id));
                if (!deleteBurger) {
                    return res.status(404).json({ message: 'Burger not found or failed to delete', status: 404 });
                }
                return res.json({
                    message: 'Burger deleted successfully by ID',
                    status: 200,
                    newDeleteBurger, // Retorna o hambúrguer atualizado
                });
            }
            catch (error) {
                console.error('Failed to update by "id" burgers', error);
                return res.status(500).json({ message: 'Failed to update burgers', status: 500 });
            }
        });
    }
}
exports.default = ControllerBurger;
//# sourceMappingURL=controllers-burger.js.map