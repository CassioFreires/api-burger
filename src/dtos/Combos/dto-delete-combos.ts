import InterfaceDeleteCombos from "../../interfaces/Combos/interface-delete-combos";

export default class DeleteCombosDTO implements InterfaceDeleteCombos{
    combo_id: number;
    name: string;
    description: string;
    price: number;

    constructor(
        public _combo_id:number,
        public _name: string,
        public _description: string,
        public _price: number,
        public _image_url: string,
    ){
        this.combo_id = this._combo_id;
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
    }
}