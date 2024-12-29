import InterfaceUpdateDrinks from "../../interfaces/Drinks/interface-update-drinks";
export default class UpdateDrinksEntites implements InterfaceUpdateDrinks {
    drink_id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
}
