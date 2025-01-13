import InterfaceLogin from "../../interfaces/Auth/interface-login";
export default class LoginDTO implements InterfaceLogin {
    _email: string;
    _password: string;
    email: string;
    password: string;
    constructor(_email: string, _password: string);
}
