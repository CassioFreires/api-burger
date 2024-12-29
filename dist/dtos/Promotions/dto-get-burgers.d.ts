import InterfaceBurgers from "../../interfaces/Burgers/interface-burgers";
export declare class BurgersDTO implements InterfaceBurgers {
    _id: number;
    _name: string;
    _description: string;
    _price: number;
    _image_url: string;
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(_id: number, _name: string, _description: string, _price: number, _image_url: string);
}
