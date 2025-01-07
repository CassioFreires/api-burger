import InterfaceDrinks from "../../interfaces/Drinks/interface-drinks";
export default class DrinksDTO implements InterfaceDrinks {
    drink_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(drink_id: number, name: string, description: string, price: number, image_url: string);
}
