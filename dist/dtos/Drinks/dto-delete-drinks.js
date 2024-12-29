"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteDrinksDTO {
    constructor(_drink_id, _name, _description, _price, _image_url) {
        this._drink_id = _drink_id;
        this._name = _name;
        this._description = _description;
        this._price = _price;
        this._image_url = _image_url;
        this.drink_id = this._drink_id;
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
        this.image_url = this._image_url;
    }
}
exports.default = DeleteDrinksDTO;
//# sourceMappingURL=dto-delete-drinks.js.map