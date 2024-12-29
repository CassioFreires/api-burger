import InterfaceUpdateBurgers from "../interfaces/Burgers/interface-update-burgers";
export default class UpdateBurgersEntites implements InterfaceUpdateBurgers {
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
}
