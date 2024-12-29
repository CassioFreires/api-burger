import InterfaceCreateBurger from "../interfaces/Burgers/interface-create-burger";
export default class CreateBurgersEntities implements InterfaceCreateBurger {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
