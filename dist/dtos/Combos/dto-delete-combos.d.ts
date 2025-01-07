import InterfaceDeleteCombos from "../../interfaces/Combos/interface-delete-combos";
export default class DeleteCombosDTO implements InterfaceDeleteCombos {
    combo_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(combo_id: number, name: string, description: string, price: number, image_url: string);
}
