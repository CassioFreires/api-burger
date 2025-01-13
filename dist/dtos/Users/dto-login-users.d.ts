import InterfaceLogin from "../../interfaces/Users/interface-login.user";
export default class LoginDTO implements InterfaceLogin {
    email: string;
    password_hash: string;
    constructor(email: string, password_hash: string);
}
