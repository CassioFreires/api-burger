import InterfaceAddress from "../../interfaces/Address/interface-get-address";
export default class AddressDTO implements InterfaceAddress {
    address_id: number;
    user_id: number;
    street: string;
    number: string;
    complement: string | null;
    neighborhood: string;
    zip_code: string;
    city: string;
    state: string;
    reference_point: string | null;
    created_at: Date | null;
    constructor(address_id: number, user_id: number, street: string, number: string, complement: string | null, neighborhood: string, zip_code: string, city: string, state: string, reference_point: string | null, created_at: Date | null);
}
