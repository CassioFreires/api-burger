import InterfaceDeleteDrinks from "../../interfaces/Drinks/interface-delete-drinks";
export default class DeleteDrinksEntities implements InterfaceDeleteDrinks {
    drink_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
