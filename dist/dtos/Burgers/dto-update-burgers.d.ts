import InterfaceUpdateBurgers from "../../interfaces/Burgers/interface-update-burgers";
export default class BurgersUpdateDTO implements InterfaceUpdateBurgers {
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(name: string, description: string, price: number, image_url: string);
}
