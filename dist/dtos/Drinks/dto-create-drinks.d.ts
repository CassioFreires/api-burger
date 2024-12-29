import InterfaceCreateDrinks from "../../interfaces/Drinks/interface-create-drinks";
export default class CreateDrinksDTO implements InterfaceCreateDrinks {
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
