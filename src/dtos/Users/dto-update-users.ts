import InterfaceUpdateUser from "../../interfaces/Users/interface-update-user";

export default class UpdateUserDTO implements InterfaceUpdateUser {

    constructor(
        public name: string,
        public email: string,
        public password_hash: string,
        public role_id?: number,
        public active?: number,
    ) {}
}
