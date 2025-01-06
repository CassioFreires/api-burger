import InterfaceBurgers from "../../interfaces/Burgers/interface-burgers";

export class BurgersDTO implements  InterfaceBurgers{
 
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,

    ) {}

}