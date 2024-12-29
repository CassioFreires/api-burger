import InterfaceUpdateCombos from "../../interfaces/Combos/interface-update-combos";

export default class CombosUpdateDTO implements InterfaceUpdateCombos{
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