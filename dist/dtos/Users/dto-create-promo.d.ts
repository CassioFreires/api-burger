import InterfaceCreatePromotions from "../../interfaces/Promotions/interface-create-bromo";
export default class CreatePromototionsDTO implements InterfaceCreatePromotions {
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(name: string, description: string, price: number, image_url: string);
}
