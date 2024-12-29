import InterfaceCreatePromotions from "../../interfaces/Promotions/interface-create-bromo";
export default class CreatePromototionsDTO implements InterfaceCreatePromotions {
    _name: string;
    _description: string;
    _price: number;
    _image_url: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(_name: string, _description: string, _price: number, _image_url: string);
}
