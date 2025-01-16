import InterfaceCreateUser from "../../interfaces/Users/interface-create-user";
export default class CreateUserDTO implements InterfaceCreateUser {

    constructor(
        public name: string,
        public email: string,
        public password_hash: string,
        public role_id?: number,  // Opcional, pois o padrão será '3' (Cliente)
        public active?: number, // Opcional, o padrão será '1' (Ativo)
    ) {}
}