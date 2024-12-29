import InterfacePromotions from "../../interfaces/Promotions/interface-get-promo";

export class PromotionsDTO implements InterfacePromotions {
    promotion_id!: number;
    name!: string;
    description!: string;
    price!: number;
    image_url!: string;
    constructor(
        public _promotion_id: number,
        public _name: string,
        public _description: string,
        public _price: number,
        public _image_url: string,

    ) {
        this.promotion_id = this._promotion_id;
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
        this.image_url = this._image_url;
    }
}