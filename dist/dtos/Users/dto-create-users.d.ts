import InterfaceCreateUser from "../../interfaces/Users/interface-create-user";
export default class CreateUserDTO implements InterfaceCreateUser {
    name: string;
    email: string;
    password: string;
    role?: number | undefined;
    status?: number | undefined;
    constructor(name: string, email: string, password: string, role?: number | undefined, // Opcional, pois o padrão será '1' (Cliente)
    status?: number | undefined);
}
