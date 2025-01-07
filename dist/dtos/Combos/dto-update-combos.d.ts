import InterfaceUpdateCombos from "../../interfaces/Combos/interface-update-combos";
export default class CombosUpdateDTO implements InterfaceUpdateCombos {
    name: string;
    description: string;
    price: number;
    constructor(name: string, description: string, price: number);
}
