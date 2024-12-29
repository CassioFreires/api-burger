"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombosDTO = void 0;
class CombosDTO {
    constructor(_combos_id, _name, _description, _price) {
        this._combos_id = _combos_id;
        this._name = _name;
        this._description = _description;
        this._price = _price;
        this.combo_id = this._combos_id;
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
    }
}
exports.CombosDTO = CombosDTO;
//# sourceMappingURL=dto-get-combos.js.map