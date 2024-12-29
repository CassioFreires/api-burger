import InterfaceCreateCombos from "../../interfaces/Combos/interface-create-combos";
export default class CreateCombosDTO implements InterfaceCreateCombos {
    _name: string;
    _description: string;
    _price: number;
    name: string;
    description: string;
    price: number;
    constructor(_name: string, _description: string, _price: number);
}
