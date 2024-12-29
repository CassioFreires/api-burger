import InterfaceCreatePromotions from "../../interfaces/Promotions/interface-create-bromo";
export default class CreatePromotionsEntities implements InterfaceCreatePromotions {
    promotion_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
