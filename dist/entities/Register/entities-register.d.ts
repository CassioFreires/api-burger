import InterfaceRegister from "../../interfaces/Register/interface-register";
export default class RegisterEntities implements InterfaceRegister {
    _name: string;
    _email: string;
    _password: string;
    name: string;
    email: string;
    password: string;
    constructor(_name: string, _email: string, _password: string);
}
