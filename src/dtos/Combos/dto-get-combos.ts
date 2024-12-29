import InterfaceCombos from "../../interfaces/Combos/interface-get-combos";

export class CombosDTO implements  InterfaceCombos{
    combo_id: number;
    name: string;
    description: string;
    price: number;

    constructor(
        public _combos_id:number,
        public _name: string,
        public _description: string,
        public _price: number,

    ) {
        this.combo_id = this._combos_id;
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
     }
}