import InterfaceCreateBurger from "../interfaces/Burgers/interface-create-burger";
export default class CreateBurgersDTO implements InterfaceCreateBurger {
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
