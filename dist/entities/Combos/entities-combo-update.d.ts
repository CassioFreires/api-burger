import InterfaceUpdateCombos from "../../interfaces/Combos/interface-update-combos";
export default class CombosUpdateEntities implements InterfaceUpdateCombos {
    combo_id: number;
    name: string;
    description: string;
    price: number;
}
