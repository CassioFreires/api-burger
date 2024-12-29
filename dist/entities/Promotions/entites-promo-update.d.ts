import InterfaceUpdatePromotions from "../../interfaces/Promotions/interface-update-promo";
export default class UpdatePromotionsEntites implements InterfaceUpdatePromotions {
    promotion_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
