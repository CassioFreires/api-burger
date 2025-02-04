"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddressDTO {
    constructor(address_id, user_id, street, number, complement, neighborhood, zip_code, city, state, reference_point, created_at) {
        this.address_id = address_id;
        this.user_id = user_id;
        this.street = street;
        this.number = number;
        this.complement = complement;
        this.neighborhood = neighborhood;
        this.zip_code = zip_code;
        this.city = city;
        this.state = state;
        this.reference_point = reference_point;
        this.created_at = created_at;
    }
}
exports.default = AddressDTO;
//# sourceMappingURL=dto-get-address.js.map