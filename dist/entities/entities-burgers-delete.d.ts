import InterfaceDeleteBurgers from "../interfaces/Burgers/interface-delete-burgers";
export default class BurgerEntities implements InterfaceDeleteBurgers {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
