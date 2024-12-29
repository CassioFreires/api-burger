import InterfacePromotions from "../../interfaces/Promotions/interface-get-promo";
export default class PromotionsEntities implements InterfacePromotions {
    promotion_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
