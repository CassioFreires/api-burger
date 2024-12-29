import { IgetBurgers } from "../interfaces/interface-getBurgers";
export default class BurgerEntities implements IgetBurgers {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
