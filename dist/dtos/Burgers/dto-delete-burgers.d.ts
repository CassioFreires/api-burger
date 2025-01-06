import InterfaceDeleteBurgers from "../../interfaces/Burgers/interface-delete-burgers";
export default class DeleteBurgersDTO implements InterfaceDeleteBurgers {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(id: number, name: string, description: string, price: number, image_url: string);
}
