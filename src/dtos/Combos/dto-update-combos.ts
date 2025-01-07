import InterfaceUpdateCombos from "../../interfaces/Combos/interface-update-combos";

export default class CombosUpdateDTO implements InterfaceUpdateCombos{
    constructor(
        public name: string,
        public description: string,
        public price: number,
    ){}
}