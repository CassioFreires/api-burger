import InterfaceDeleteCombos from "../../interfaces/Combos/interface-delete-combos";
export default class DeleteCombosDTO implements InterfaceDeleteCombos {
    _combo_id: number;
    _name: string;
    _description: string;
    _price: number;
    _image_url: string;
    combo_id: number;
    name: string;
    description: string;
    price: number;
    constructor(_combo_id: number, _name: string, _description: string, _price: number, _image_url: string);
}
