"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateAddressDTO {
    constructor(user_id, street, number, complement, neighborhood, zip_code, city, state, reference_point) {
        this.user_id = user_id;
        this.street = street;
        this.number = number;
        this.complement = complement;
        this.neighborhood = neighborhood;
        this.zip_code = zip_code;
        this.city = city;
        this.state = state;
        this.reference_point = reference_point;
    }
}
exports.default = CreateAddressDTO;
//# sourceMappingURL=dto-create-address.js.map