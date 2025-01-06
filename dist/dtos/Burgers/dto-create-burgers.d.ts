import InterfaceCreateBurger from "../../interfaces/Burgers/interface-create-burger";
export default class CreateBurgersDTO implements InterfaceCreateBurger {
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(name: string, description: string, price: number, image_url: string);
}
