import InterfaceUpdateUser from "../../interfaces/Users/interface-update-user";
export default class UpdateUserEntities implements InterfaceUpdateUser {
    id: number;
    name: string;
    email: string;
    password: string;
    role: number;
    status: number;
}
