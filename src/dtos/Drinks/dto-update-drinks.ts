import InterfaceUpdateDrinks from "../../interfaces/Drinks/interface-update-drinks";

export default class DrinksUpdateDTO implements InterfaceUpdateDrinks{

    constructor(
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,
    ){}
}