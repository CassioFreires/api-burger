import InterfaceLogin from "../../interfaces/Auth/interface-auth";

export default class LoginDTO implements InterfaceLogin {
    email: string;
    password: string;

    constructor(public _email:string, public _password:string){
        this.email = this._email;
        this.password = this._password;
    }
}
