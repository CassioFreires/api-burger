import InterfaceCreateDrinks from "../../interfaces/Drinks/interface-create-drinks";

export default class CreateDrinksDTO implements InterfaceCreateDrinks{

    constructor(
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,
    ){}
}