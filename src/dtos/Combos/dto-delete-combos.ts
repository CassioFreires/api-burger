import InterfaceDeleteCombos from "../../interfaces/Combos/interface-delete-combos";

export default class DeleteCombosDTO implements InterfaceDeleteCombos{

    constructor(
        public combo_id:number,
        public name: string,
        public description: string,
        public price: number,
        public image_url: string,
    ){}
}