import InterfaceBurgers from "../interfaces/interface-burgers";
export default class BurgerEntities implements InterfaceBurgers {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
