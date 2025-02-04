import DataBase from "../database/DataBase";
import CreateAddressDTO from "../dtos/Address/dto-create-address";
import { QueryFailedError } from "typeorm";
import CreateAddressEntities from "../entities/Address/entities-address-create";
import AddressEntities from "../entities/Address/entities-address.get";


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

    async getAddressUserByIdService(userId:number) {

        console.log(userId)
        try {
            const getAddress = (await this.database.connect()).getRepository(AddressEntities);
            return await getAddress.findOne({
                where: {
                    user_id: userId,
                }
            })
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
}