import InterfaceUpdateDrinks from "../../interfaces/Drinks/interface-update-drinks";
export default class DrinksUpdateDTO implements InterfaceUpdateDrinks {
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(name: string, description: string, price: number, image_url: string);
}
