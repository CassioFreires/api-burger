import InterfaceCreateDrinks from "../../interfaces/Drinks/interface-create-drinks";
export default class CreateDrinksDTO implements InterfaceCreateDrinks {
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(name: string, description: string, price: number, image_url: string);
}
