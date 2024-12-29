import InterfaceUpdatePromotions from "../../interfaces/Promotions/interface-update-promo";

export default class PromotionsUpdateDTO implements InterfaceUpdatePromotions{
    name!: string;
    description!: string;
    price!: number;
    image_url!: string;
    constructor(
        public _name: string,
        public _description: string,
        public _price: number,
        public _image_url: string,

    ) {
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
        this.image_url = this._image_url;
    }
}