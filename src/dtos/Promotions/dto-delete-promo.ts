import InterfaceDeletePromotions from "../../interfaces/Promotions/interface-delete-promo";

export default class DeletePromotionsDTO implements InterfaceDeletePromotions{

    constructor(
        public promotion_id: number,
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,

    ) {}
}