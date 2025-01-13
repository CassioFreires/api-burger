import InterfaceDeleteUser from "../../interfaces/Users/interface-delete-user";
export default class DeleteUserDTO implements InterfaceDeleteUser {
    id: number;
    name: string;
    email: string;
    password: string;
    role: number;
    status: number;
    constructor(id: number, name: string, email: string, password: string, role: number, status: number);
}
