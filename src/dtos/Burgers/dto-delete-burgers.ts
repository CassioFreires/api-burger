import InterfaceDeleteBurgers from "../../interfaces/Burgers/interface-delete-burgers";

export default class DeleteBurgersDTO implements InterfaceDeleteBurgers{
    constructor(
        public id:number,
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,
    ){}
}