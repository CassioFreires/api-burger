import InterfaceDrinks from "../../interfaces/Drinks/interface-drinks";

export default class DrinksDTO implements  InterfaceDrinks{

    constructor(
        public drink_id: number,
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,

    ) { }
}