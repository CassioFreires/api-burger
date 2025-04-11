import CreateAddressDTO from "../dtos/Address/dto-create-address";
import CreateAddressEntities from "../entities/Address/entities-address-create";
import AddressEntities from "../entities/Address/entities-address.get";
import UpdateAddressDTO from "../dtos/Address/dto-update-address";
import UpdateAddressEntities from "../entities/Address/entities-address-update";
import DeleteAddressEntities from "../entities/Address/entities-address-delete";
export default class ServiceAddress {
    private database;
    constructor();
    createService(address: CreateAddressDTO): Promise<CreateAddressDTO & CreateAddressEntities>;
    getAddressUserByIdService(userId: number): Promise<AddressEntities | null>;
    updateAddressService(userId: number, data: UpdateAddressDTO): Promise<(AddressEntities & UpdateAddressEntities) | null>;
    excludeService(userId: number): Promise<DeleteAddressEntities | null>;
}
