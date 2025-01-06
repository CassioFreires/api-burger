import InterfaceRegister from "../../interfaces/Register/interface-register";

export default class RegisterDTO implements InterfaceRegister {
    name: string;
    email: string;
    password: string;

    constructor(public _name:string, public _email:string, public _password:string){
        this.name = this._name;
        this.email = this._email;
        this.password = this._password;
    }
}