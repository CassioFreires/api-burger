import InterfaceCreateUser from "../../interfaces/Users/interface-create-user";
export default class CreateUserDTO implements InterfaceCreateUser {

    constructor(
        public name: string,
        public email: string,
        public password: string,
        public role?: number,  // Opcional, pois o padrão será '1' (Cliente)
        public status?: number, // Opcional, o padrão será '1' (Ativo)
    ) {}
}