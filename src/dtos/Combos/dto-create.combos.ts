import InterfaceCreateCombos from "../../interfaces/Combos/interface-create-combos";
export default class CreateCombosDTO implements InterfaceCreateCombos{

    constructor(
        public name: string,
        public description: string,
        public price: number,
    ){ }
}