import InterfaceUpdateUser from "../../interfaces/Users/interface-update-user";
export default class UpdateUserDTO implements InterfaceUpdateUser {
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    role?: number | undefined;
    status?: number | undefined;
    constructor(name?: string | undefined, email?: string | undefined, password?: string | undefined, role?: number | undefined, status?: number | undefined);
}
