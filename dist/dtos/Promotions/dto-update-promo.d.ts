import InterfaceUpdatePromotions from "../../interfaces/Promotions/interface-update-promo";
export default class PromotionsUpdateDTO implements InterfaceUpdatePromotions {
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(name: string, description: string, price: number, image_url: string);
}
