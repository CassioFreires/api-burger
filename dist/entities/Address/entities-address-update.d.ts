import InterfaceUpdateAddress from "../../interfaces/Address/interface-update-address";
export default class UpdateAddressEntities implements InterfaceUpdateAddress {
    address_id: number;
    street?: string;
    number?: string;
    complement?: string | null;
    neighborhood?: string;
    zip_code?: string;
    city?: string;
    state?: string;
    reference_point?: string | null;
    updated_at: Date | null;
}
