import InterfaceDeleteDrinks from "../../interfaces/Drinks/interface-delete-drinks";
export default class DeleteDrinksDTO implements InterfaceDeleteDrinks {
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
