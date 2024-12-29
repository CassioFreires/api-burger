import InterfaceCombos from "../../interfaces/Combos/interface-get-combos";
export default class CombosEntities implements InterfaceCombos {
    combo_id: number;
    name: string;
    description: string;
    price: number;
}
