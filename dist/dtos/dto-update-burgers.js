"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BurgersUpdateDTO {
    constructor(_name, _description, _price, _image_url) {
        this._name = _name;
        this._description = _description;
        this._price = _price;
        this._image_url = _image_url;
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
        this.image_url = this._image_url;
    }
}
exports.default = BurgersUpdateDTO;
//# sourceMappingURL=dto-update-burgers.js.map