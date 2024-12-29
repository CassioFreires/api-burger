import InterfaceCreateCombos from "../../interfaces/Combos/interface-create-combos";
export default class CreateCombosDTO implements InterfaceCreateCombos{
    name: string;
    description: string;
    price: number;
    constructor(
        public _name: string,
        public _description: string,
        public _price: number,
    ){ 
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
    }
}