import InterfacePromotions from "../../interfaces/Promotions/interface-get-promo";

export class PromotionsDTO implements InterfacePromotions {

    constructor(
        public promotion_id: number,
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,
    ) {}
}