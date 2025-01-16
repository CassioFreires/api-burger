import InterfaceUpdateUser from "../../interfaces/Users/interface-update-user";
export default class UpdateUserDTO implements InterfaceUpdateUser {
    name: string;
    email: string;
    password_hash: string;
    role_id?: number | undefined;
    active?: number | undefined;
    constructor(name: string, email: string, password_hash: string, role_id?: number | undefined, active?: number | undefined);
}
