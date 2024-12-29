import InterfaceUpdateBurgers from "../interfaces/Burgers/interface-update-burgers";
export default class BurgersUpdateDTO implements InterfaceUpdateBurgers {
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
