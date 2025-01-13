import InterfaceCreateUser from "../../interfaces/Users/interface-create-user";
export default class CreateUserEntities implements InterfaceCreateUser {
    id: number;
    name: string;
    email: string;
    password: string;
    role: number;
    status: number;
}
