import InterfaceCreatePromotions from "../../interfaces/Promotions/interface-create-bromo";

export default class CreatePromototionsDTO implements InterfaceCreatePromotions{
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,

    ) {}
}