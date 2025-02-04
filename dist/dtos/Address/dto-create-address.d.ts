import InterfaceCreateAddress from "../../interfaces/Address/interface-create-address";
export default class CreateAddressDTO implements InterfaceCreateAddress {
    user_id: number;
    street: string;
    number: string;
    complement: string | null;
    neighborhood: string;
    zip_code: string;
    city: string;
    state: string;
    reference_point: string | null;
    constructor(user_id: number, street: string, number: string, complement: string | null, neighborhood: string, zip_code: string, city: string, state: string, reference_point: string | null);
}
