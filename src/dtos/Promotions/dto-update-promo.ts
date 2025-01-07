import InterfaceUpdatePromotions from "../../interfaces/Promotions/interface-update-promo";

export default class PromotionsUpdateDTO implements InterfaceUpdatePromotions{

    constructor(
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,

    ) {}
}