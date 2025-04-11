import DataBase from "../database/DataBase";
import CreateAddressDTO from "../dtos/Address/dto-create-address";
import { QueryFailedError } from "typeorm";
import CreateAddressEntities from "../entities/Address/entities-address-create";
import AddressEntities from "../entities/Address/entities-address.get";
import UpdateAddressDTO from "../dtos/Address/dto-update-address";
import UpdateAddressEntities from "../entities/Address/entities-address-update";
import DeleteAddressEntities from "../entities/Address/entities-address-delete";


export default class ServiceAddress {
    private database: DataBase;

    constructor() {
        this.database = new DataBase();
    }

    async createService(address: CreateAddressDTO) {
        try {
            const getAddress = (await this.database.connect()).getRepository(CreateAddressEntities);
            return await getAddress.save(address);
        } catch (error) {
            console.error('failed error create address:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error saving address to database:', error.message);
                throw new Error('Failed to create address');
            } else {
                console.error('Unexpected error in createAddressService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

    async getAddressUserByIdService(userId: number) {


        try {
            const getAddress = (await this.database.connect()).getRepository(AddressEntities);

            const address = await getAddress.findOne({
                where: {
                    user_id: userId,
                }
            });

            if (!address || address == null) {
                console.log('O usuário não esta cadastrado no endereço');
                return null;
            }
            return address;
        } catch (error) {
            console.error('failed error get address user by id address:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error saving get address user by id to database:', error.message);
                throw new Error('Failed to get address user by id address');
            } else {
                console.error('Unexpected error in getAddressUserByIdService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }


    async updateAddressService(userId: number, data: UpdateAddressDTO) {
        try {
            const addressRepository = (await this.database.connect()).getRepository(UpdateAddressEntities);

            const address = await this.getAddressUserByIdService(userId);

            if (!address) {
                return null; // Endereço não encontrado
            }

            // Atualiza os campos do endereço com os dados fornecidos
            Object.assign(address, data);  // Preenche os campos existentes com os dados fornecidos


            const updatedAddress = await addressRepository.save(address); // Salva o endereço atualizado

            return updatedAddress; // Retorna o endereço atualizado
        } catch (error) {
            console.error('Error updating address:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error updating address in database:', error.message);
                throw new Error('Failed to update address');
            } else {
                console.error('Unexpected error in updateAddressService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }



    // Deletar um endereço
    async excludeService(userId: number) {
        try {
            const updateRepository = (await this.database.connect()).getRepository(DeleteAddressEntities);
            const update_address = await updateRepository.findOneBy({ user_id: userId });
            if (update_address) {
                await updateRepository.remove(update_address);
                console.log('address delete with successfully')
                return update_address;
            } else {
                console.log('address not found for deleted');
                return null
            }

        } catch (error) {
            console.error('failed error delete address:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error delete address to database:', error.message);
                throw new Error('Failed Fo delete address');
            } else {
                console.error('Unexpected error in deleteaddressService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
}