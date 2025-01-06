import InterfaceCreateBurger from "../../interfaces/Burgers/interface-create-burger";

export default class CreateBurgersDTO implements InterfaceCreateBurger{

    constructor(
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,
    ){}
}