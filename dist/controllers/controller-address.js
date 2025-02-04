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
class ControllerAddress {
    constructor() {
        this.serviceAddress = new service_address_1.default();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id, street, number, complement, neighborhood, zip_code, city, state, reference_point, } = req.body;
                if (!user_id || !street || !number || !complement || !neighborhood || !zip_code || !state || !city || !reference_point) {
                    return res.status(401).json({ message: 'you need to fill in all the necessary fields' });
                }
                const createAddressDTO = new dto_create_address_1.default(user_id, street, number, complement, neighborhood, zip_code, city, state, reference_point);
                const address = yield this.serviceAddress.createService(createAddressDTO);
                if (!address)
                    return res.status(401).json({ message: 'Unable to create address' });
                //   const addressRepository = getRepository(CreateAddressEntity);
                //   const newAddress = addressRepository.create({
                //     user_id,
                //     street,
                //     number,
                //     complement,
                //     neighborhood,
                //     zip_code,
                //     city,
                //     state,
                //     reference_point,
                //   });
                //   const savedAddress = await addressRepository.save(newAddress);
                return res.status(201).json({ message: 'Address created', });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Error creating address", error });
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
                console.log(addresByUser); // Verifique os dados retornados
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
}
exports.default = ControllerAddress;
//# sourceMappingURL=controller-address.js.map