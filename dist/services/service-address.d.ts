import CreateAddressDTO from "../dtos/Address/dto-create-address";
import CreateAddressEntities from "../entities/Address/entities-address-create";
import AddressEntities from "../entities/Address/entities-address.get";
export default class ServiceAddress {
    private database;
    constructor();
    createService(address: CreateAddressDTO): Promise<CreateAddressDTO & CreateAddressEntities>;
    getAddressUserByIdService(userId: number): Promise<AddressEntities | null>;
}
