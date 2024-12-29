import InterfaceUpdatePromotions from "../../interfaces/Promotions/interface-update-promo";
export default class PromotionsUpdateDTO implements InterfaceUpdatePromotions {
    _name: string;
    _description: string;
    _price: number;
    _image_url: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(_name: string, _description: string, _price: number, _image_url: string);
}
