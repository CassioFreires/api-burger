import InterfaceUpdateBurgers from "../../interfaces/Burgers/interface-update-burgers";

export default class BurgersUpdateDTO implements InterfaceUpdateBurgers{
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,
    ){}
}