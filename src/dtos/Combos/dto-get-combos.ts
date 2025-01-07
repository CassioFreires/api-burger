import InterfaceCombos from "../../interfaces/Combos/interface-get-combos";

export class CombosDTO implements InterfaceCombos {


    constructor(
        public combo_id: number,
        public name: string,
        public description: string,
        public price: number,

    ) { }
}