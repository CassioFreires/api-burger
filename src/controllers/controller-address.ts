import { Request, Response } from "express";
import CreateAddressDTO from "../dtos/Address/dto-create-address";
import ServiceAddress from "../services/service-address";

export default class ControllerAddress {
    private serviceAddress: ServiceAddress;

    constructor() {
        this.serviceAddress = new ServiceAddress();
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const {
                user_id,
                street,
                number,
                complement,
                neighborhood,
                zip_code,
                city,
                state,
                reference_point,
            } = req.body;

            if (!user_id || !street || !number || !complement || !neighborhood || !zip_code || !state || !city || !reference_point) {
                return res.status(401).json({ message: 'you need to fill in all the necessary fields' });
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
            if (!address) return res.status(401).json({ message: 'Unable to create address' });


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
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error creating address", error });
        }
    }

    // Obter todos os endereços

    async getByUserId(req: Request, res: Response): Promise<Response> {
        try {
            if (!req.user) return res.status(401).json({ message: "user not found" });

            const addresByUser = await this.serviceAddress.getAddressUserByIdService(req.user.id);
            console.log(addresByUser);  // Verifique os dados retornados

            if (!addresByUser) return res.status(401).json({ message: 'User does not have an address registered in the system' });

            return res.json({ message: 'Get address by user ID OK', addresByUser });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error fetching address", error });
        }
    }


    // async getAll(req: Request, res: Response): Promise<Response> {
    //     try {
    //         const addressRepository = getRepository(CreateAddressEntity);
    //         const addresses = await addressRepository.find();
    //         return res.status(200).json(addresses);
    //     } catch (error) {
    //         return res.status(500).json({ message: "Error fetching addresses", error });
    //     }
    // }

    // // Obter um endereço específico por ID
    // async getById(req: Request, res: Response): Promise<Response> {
    //     try {
    //         const { id } = req.params;
    //         const addressRepository = getRepository(CreateAddressEntity);
    //         const address = await addressRepository.findOne(id);

    //         if (!address) {
    //             return res.status(404).json({ message: "Address not found" });
    //         }

    //         return res.status(200).json(address);
    //     } catch (error) {
    //         return res.status(500).json({ message: "Error fetching address", error });
    //     }
    // }

    // // Atualizar um endereço existente
    // async update(req: Request, res: Response): Promise<Response> {
    //     try {
    //         const { id } = req.params;
    //         const {
    //             user_id,
    //             street,
    //             number,
    //             complement,
    //             neighborhood,
    //             zip_code,
    //             city,
    //             state,
    //             reference_point,
    //         } = req.body;

    //         const addressRepository = getRepository(CreateAddressEntity);
    //         const address = await addressRepository.findOne(id);

    //         if (!address) {
    //             return res.status(404).json({ message: "Address not found" });
    //         }

    //         address.user_id = user_id;
    //         address.street = street;
    //         address.number = number;
    //         address.complement = complement;
    //         address.neighborhood = neighborhood;
    //         address.zip_code = zip_code;
    //         address.city = city;
    //         address.state = state;
    //         address.reference_point = reference_point;

    //         const updatedAddress = await addressRepository.save(address);

    //         return res.status(200).json(updatedAddress);
    //     } catch (error) {
    //         return res.status(500).json({ message: "Error updating address", error });
    //     }
    // }

    // // Deletar um endereço
    // async delete(req: Request, res: Response): Promise<Response> {
    //     try {
    //         const { id } = req.params;
    //         const addressRepository = getRepository(CreateAddressEntity);
    //         const address = await addressRepository.findOne(id);

    //         if (!address) {
    //             return res.status(404).json({ message: "Address not found" });
    //         }

    //         await addressRepository.remove(address);

    //         return res.status(204).send();
    //     } catch (error) {
    //         return res.status(500).json({ message: "Error deleting address", error });
    //     }
    // }
}

