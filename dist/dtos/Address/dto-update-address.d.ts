import InterfaceUpdateAddress from "../../interfaces/Address/interface-update-address";
export default class UpdateAddressDTO implements InterfaceUpdateAddress {
    street?: string | undefined;
    number?: string | undefined;
    complement?: string | undefined;
    neighborhood?: string | undefined;
    zip_code?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    reference_point?: string | undefined;
    constructor(street?: string | undefined, number?: string | undefined, complement?: string | undefined, neighborhood?: string | undefined, zip_code?: string | undefined, city?: string | undefined, state?: string | undefined, reference_point?: string | undefined);
}
