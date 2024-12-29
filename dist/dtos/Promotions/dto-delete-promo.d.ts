import InterfaceDeletePromotions from "../../interfaces/Promotions/interface-delete-promo";
export default class DeletePromotionsDTO implements InterfaceDeletePromotions {
    _promotion_id: number;
    _name: string;
    _description: string;
    _price: number;
    _image_url: string;
    promotion_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(_promotion_id: number, _name: string, _description: string, _price: number, _image_url: string);
}
