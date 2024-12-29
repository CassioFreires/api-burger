import InterfaceCombos from "../../interfaces/Combos/interface-get-combos";
export declare class CombosDTO implements InterfaceCombos {
    _combos_id: number;
    _name: string;
    _description: string;
    _price: number;
    combo_id: number;
    name: string;
    description: string;
    price: number;
    constructor(_combos_id: number, _name: string, _description: string, _price: number);
}
