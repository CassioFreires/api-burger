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
const dto_create_address_1 = __importDefault(require("../dtos/Address/dto-create-address"));
const service_address_1 = __importDefault(require("../services/service-address"));
const dto_update_address_1 = __importDefault(require("../dtos/Address/dto-update-address"));
class ControllerAddress {
    constructor() {
        this.serviceAddress = new service_address_1.default();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { street, number, complement, neighborhood, zip_code, city, state, reference_point, } = req.body;
                const user_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // Pega o user_id do payload do JWT
                if (!user_id || !street || !number || !complement || !neighborhood || !zip_code || !state || !city || !reference_point) {
                    return res.status(401).json({ message: 'Você precisa preencher todos os campos necessários' });
                }
                const createAddressDTO = new dto_create_address_1.default(user_id, street, number, complement, neighborhood, zip_code, city, state, reference_point);
                const address = yield this.serviceAddress.createService(createAddressDTO);
                if (!address)
                    return res.status(401).json({ message: 'Não foi possível criar o endereço' });
                return res.status(201).json({ message: 'Endereço criado com sucesso', address });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Erro ao criar o endereço", error });
            }
        });
    }
    // Obter todos os endereços
    getByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.user)
                    return res.status(401).json({ message: "user not found" });
                const addresByUser = yield this.serviceAddress.getAddressUserByIdService(req.user.id);
                if (!addresByUser)
                    return res.status(401).json({ message: 'User does not have an address registered in the system' });
                return res.json({ message: 'Get address by user ID OK', addresByUser });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Error fetching address", error });
            }
        });
    }
    // Atualizar um endereço existente
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { street, number, complement, neighborhood, zip_code, city, state, reference_point } = req.body;
                // Verifique se pelo menos um campo foi fornecido para atualização
                if (!street && !number && !complement && !neighborhood && !zip_code && !state && !city && !reference_point) {
                    return res.status(400).json({ message: 'É necessário preencher pelo menos um campo para atualização.' });
                }
                // Crie o DTO de atualização
                const newUpdateAddress = new dto_update_address_1.default(street, number, complement, neighborhood, zip_code, city, state, reference_point);
                // Chama o serviço para atualizar o endereço
                const updatedAddress = yield this.serviceAddress.updateAddressService(req.user.id, newUpdateAddress);
                // Verifique se o endereço foi encontrado e atualizado
                if (!updatedAddress) {
                    return res.status(404).json({ message: "Endereço não encontrado para atualização." });
                }
                return res.status(200).json({ message: 'Endereço atualizado com sucesso', updatedAddress });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Erro ao atualizar o endereço", error });
            }
        });
    }
    // Deletar um endereço
    exlucde(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield this.serviceAddress.excludeService(req.user.id);
                if (!deleted) {
                    return res.status(404).json({ message: "Endereço não encontrado." });
                }
                return res.status(204).json({ message: 'Endereço removido com sucesso.' });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Erro ao deletar o endereço", error });
            }
        });
    }
}
exports.default = ControllerAddress;
//# sourceMappingURL=controller-address.js.map