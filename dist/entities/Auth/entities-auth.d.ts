import InterfaceLogin from "../../interfaces/Auth/interface-login";
export default class LoginEntities implements InterfaceLogin {
    _email: string;
    _password: string;
    email: string;
    password: string;
    constructor(_email: string, _password: string);
}
