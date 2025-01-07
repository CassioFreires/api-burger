import InterfacePromotions from "../../interfaces/Promotions/interface-get-promo";
export declare class PromotionsDTO implements InterfacePromotions {
    promotion_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(promotion_id: number, name: string, description: string, price: number, image_url: string);
}
