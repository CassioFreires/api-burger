import InterfaceDrinks from "../../interfaces/Drinks/interface-drinks";
export default class DrinksDTO implements InterfaceDrinks {
    _drink_id: number;
    _name: string;
    _description: string;
    _price: number;
    _image_url: string;
    drink_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(_drink_id: number, _name: string, _description: string, _price: number, _image_url: string);
}
