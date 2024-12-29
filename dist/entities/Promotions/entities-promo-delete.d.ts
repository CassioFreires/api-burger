import InterfaceDeletePromotions from "../../interfaces/Promotions/interface-delete-promo";
export default class DeletePromotionsEntities implements InterfaceDeletePromotions {
    promotion_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
