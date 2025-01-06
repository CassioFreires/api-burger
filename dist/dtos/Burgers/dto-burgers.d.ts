import InterfaceBurgers from "../../interfaces/Burgers/interface-burgers";
export declare class BurgersDTO implements InterfaceBurgers {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(id: number, name: string, description: string, price: number, image_url: string);
}
