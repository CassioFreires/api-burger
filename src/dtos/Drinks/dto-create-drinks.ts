import InterfaceCreateDrinks from "../../interfaces/Drinks/interface-create-drinks";

export default class CreateDrinksDTO implements InterfaceCreateDrinks{
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(
        public _name: string,
        public _description: string,
        public _price: number,
        public _image_url: string,
    ){ 
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
        this.image_url = this._image_url;
    }
}