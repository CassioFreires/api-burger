"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionsDTO = void 0;
class PromotionsDTO {
    constructor(_promotion_id, _name, _description, _price, _image_url) {
        this._promotion_id = _promotion_id;
        this._name = _name;
        this._description = _description;
        this._price = _price;
        this._image_url = _image_url;
        this.promotion_id = this._promotion_id;
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
        this.image_url = this._image_url;
    }
}
exports.PromotionsDTO = PromotionsDTO;
//# sourceMappingURL=dto-get-promo.js.map