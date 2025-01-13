import InterfaceDeleteUser from "../../interfaces/Users/interface-delete-user";

export default class DeleteUserDTO implements InterfaceDeleteUser {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public role: number,
        public status: number,
    ) {}
}
