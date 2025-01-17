import InterfaceDeleteUser from "../../interfaces/Users/interface-delete-user";
export default class DeleteUserEntities implements InterfaceDeleteUser {
    id: number;
    name: string;
    email: string;
    password_hash: string;
    role_id: number;
    active: number;
}
