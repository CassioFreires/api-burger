import InterfaceUpdateCombos from "../../interfaces/Combos/interface-update-combos";
export default class CombosUpdateDTO implements InterfaceUpdateCombos {
    _name: string;
    _description: string;
    _price: number;
    name: string;
    description: string;
    price: number;
    constructor(_name: string, _description: string, _price: number);
}
