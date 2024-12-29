"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteCombosDTO {
    constructor(_combo_id, _name, _description, _price, _image_url) {
        this._combo_id = _combo_id;
        this._name = _name;
        this._description = _description;
        this._price = _price;
        this._image_url = _image_url;
        this.combo_id = this._combo_id;
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
    }
}
exports.default = DeleteCombosDTO;
//# sourceMappingURL=dto-delete-combos.js.map