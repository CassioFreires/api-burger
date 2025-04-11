import { Request, Response } from "express";
import CreateAddressDTO from "../dtos/Address/dto-create-address";
import ServiceAddress from "../services/service-address";
import UpdateAddressDTO from "../dtos/Address/dto-update-address";

export default class ControllerAddress {
    private serviceAddress: ServiceAddress;

    constructor() {
        this.serviceAddress = new ServiceAddress();
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const {
                street,
                number,
                complement,
                neighborhood,
                zip_code,
                city,
                state,
                reference_point,
            } = req.body;

            const user_id = req.user?.id; // Pega o user_id do payload do JWT
            if (!user_id || !street || !number || !complement || !neighborhood || !zip_code || !state || !city || !reference_point) {
                return res.status(401).json({ message: 'Você precisa preencher todos os campos necessários' });
            }

            const createAddressDTO = new CreateAddressDTO(
                user_id,
                street,
                number,
                complement,
                neighborhood,
                zip_code,
                city,
                state,
                reference_point,
            );

            const address = await this.serviceAddress.createService(createAddressDTO);
            if (!address) return res.status(401).json({ message: 'Não foi possível criar o endereço' });

            return res.status(201).json({ message: 'Endereço criado com sucesso', address });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro ao criar o endereço", error });
        }
    }


    // Obter todos os endereços
    async getByUserId(req: Request, res: Response): Promise<Response> {
        try {
            if (!req.user) return res.status(401).json({ message: "user not found" });

            const addresByUser = await this.serviceAddress.getAddressUserByIdService(req.user.id);

            if (!addresByUser) return res.status(401).json({ message: 'User does not have an address registered in the system' });

            return res.json({ message: 'Get address by user ID OK', addresByUser });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error fetching address", error });
        }
    }


    // Atualizar um endereço existente
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { street, number, complement, neighborhood, zip_code, city, state, reference_point } = req.body;

            // Verifique se pelo menos um campo foi fornecido para atualização
            if (!street && !number && !complement && !neighborhood && !zip_code && !state && !city && !reference_point) {
                return res.status(400).json({ message: 'É necessário preencher pelo menos um campo para atualização.' });
            }

            // Crie o DTO de atualização
            const newUpdateAddress = new UpdateAddressDTO(
                street,
                number,
                complement,
                neighborhood,
                zip_code,
                city,
                state,
                reference_point
            );

            // Chama o serviço para atualizar o endereço
            const updatedAddress = await this.serviceAddress.updateAddressService(req.user.id, newUpdateAddress);

            // Verifique se o endereço foi encontrado e atualizado
            if (!updatedAddress) {
                return res.status(404).json({ message: "Endereço não encontrado para atualização." });
            }

            return res.status(200).json({ message: 'Endereço atualizado com sucesso', updatedAddress });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro ao atualizar o endereço", error });
        }
    }


    // Deletar um endereço
    async exlucde(req: Request, res: Response): Promise<Response> {
        try {

            const deleted = await this.serviceAddress.excludeService(req.user.id);
            if (!deleted) {
                return res.status(404).json({ message: "Endereço não encontrado." });
            }

            return res.status(204).json({ message: 'Endereço removido com sucesso.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro ao deletar o endereço", error });
        }
    }

}

