import InterfaceLogin from "../../interfaces/Users/interface-login.user";

export default class LoginDTO implements InterfaceLogin {
    constructor(
        public email: string,
        public password_hash: string
    ) {}

}
