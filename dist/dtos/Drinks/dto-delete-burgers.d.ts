import InterfaceDeleteBurgers from "../../interfaces/Burgers/interface-delete-burgers";
export default class DeleteBurgersDTO implements InterfaceDeleteBurgers {
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
