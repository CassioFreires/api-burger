import InterfaceDeleteDrinks from "../../interfaces/Drinks/interface-delete-drinks";

export default class DeleteDrinksDTO implements InterfaceDeleteDrinks{

    constructor(
        public drink_id:number,
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,
    ){}
}