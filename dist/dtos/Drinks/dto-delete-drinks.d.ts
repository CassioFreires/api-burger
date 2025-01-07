import InterfaceDeleteDrinks from "../../interfaces/Drinks/interface-delete-drinks";
export default class DeleteDrinksDTO implements InterfaceDeleteDrinks {
    drink_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(drink_id: number, name: string, description: string, price: number, image_url: string);
}
