import InterfaceCreateUser from "../../interfaces/Users/interface-create-user";
export default class CreateUserDTO implements InterfaceCreateUser {
    name: string;
    email: string;
    password_hash: string;
    role_id?: number | undefined;
    active?: number | undefined;
    constructor(name: string, email: string, password_hash: string, role_id?: number | undefined, // Opcional, pois o padrão será '3' (Cliente)
    active?: number | undefined);
}
