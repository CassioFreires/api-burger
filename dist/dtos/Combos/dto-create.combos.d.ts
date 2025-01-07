import InterfaceCreateCombos from "../../interfaces/Combos/interface-create-combos";
export default class CreateCombosDTO implements InterfaceCreateCombos {
    name: string;
    description: string;
    price: number;
    constructor(name: string, description: string, price: number);
}
