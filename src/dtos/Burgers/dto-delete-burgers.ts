import InterfaceDeleteBurgers from "../../interfaces/Burgers/interface-delete-burgers";

export default class DeleteBurgersDTO implements InterfaceDeleteBurgers{
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;

    constructor(
        public _id:number,
        public _name: string,
        public _description: string,
        public _price: number,
        public _image_url: string,
    ){
        this.id = this._id;
        this.name = this._name;
        this.description = this._description;
        this.price = this._price;
        this.image_url = this._image_url;
    }
}