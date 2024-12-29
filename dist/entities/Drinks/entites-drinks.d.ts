import InterfaceDrinks from "../../interfaces/Drinks/interface-drinks";
export default class DrinksEntities implements InterfaceDrinks {
    drink_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
