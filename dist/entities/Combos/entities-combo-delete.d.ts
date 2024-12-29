import InterfaceDeleteCombos from "../../interfaces/Combos/interface-delete-combos";
export default class CombosDeleteEntities implements InterfaceDeleteCombos {
    combo_id: number;
    name: string;
    description: string;
    price: number;
}
