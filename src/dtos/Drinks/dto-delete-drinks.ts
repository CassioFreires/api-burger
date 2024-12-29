import InterfaceDeleteDrinks from "../../interfaces/Drinks/interface-delete-drinks";

export default class DeleteDrinksDTO implements InterfaceDeleteDrinks{
    drink_id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;

    constructor(
        public _drink_id:number,
        public _name: string,
        public _description: string,
        public _price: number,
        public _image_url: string,
    ){
        this.drink_id = this._drink_id;
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
        this.image_url = this._image_url;
    }
}