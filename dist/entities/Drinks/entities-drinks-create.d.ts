import InterfaceCreateDrinks from "../../interfaces/Drinks/interface-create-drinks";
export default class CreateDrinksEntities implements InterfaceCreateDrinks {
    drink_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
