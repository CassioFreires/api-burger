"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteBurgersDTO {
    constructor(_id, _name, _description, _price, _image_url) {
        this._id = _id;
        this._name = _name;
        this._description = _description;
        this._price = _price;
        this._image_url = _image_url;
        this.id = this._id;
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
        this.image_url = this._image_url;
    }
}
exports.default = DeleteBurgersDTO;
//# sourceMappingURL=dto-delete-burgers.js.map