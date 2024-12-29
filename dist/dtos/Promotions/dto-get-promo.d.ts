import InterfacePromotions from "../../interfaces/Promotions/interface-get-promo";
export declare class PromotionsDTO implements InterfacePromotions {
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
