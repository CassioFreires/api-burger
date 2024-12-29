import InterfaceUpdateDrinks from "../../interfaces/Drinks/interface-update-drinks";
export default class DrinksUpdateDTO implements InterfaceUpdateDrinks {
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
