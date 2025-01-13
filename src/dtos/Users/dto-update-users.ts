import InterfaceUpdateUser from "../../interfaces/Users/interface-update-user";

export default class UpdateUserDTO implements InterfaceUpdateUser {

    constructor(
        public name?: string,
        public email?: string,
        public password?: string,
        public role?: number,
        public status?: number,
    ) {}
}
