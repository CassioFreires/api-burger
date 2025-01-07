import InterfaceCombos from "../../interfaces/Combos/interface-get-combos";
export declare class CombosDTO implements InterfaceCombos {
    combo_id: number;
    name: string;
    description: string;
    price: number;
    constructor(combo_id: number, name: string, description: string, price: number);
}
