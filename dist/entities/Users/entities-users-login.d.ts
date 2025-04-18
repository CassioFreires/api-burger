import InterfaceLogin from "../../interfaces/Users/interface-login.user";
import RoleEntities from "../Roles/entities-roles-get";
export default class LoginEntities implements InterfaceLogin {
    id: number;
    name: string;
    email: string;
    password_hash: string;
    roles: RoleEntities;
    active: boolean;
    phoneNumber: string;
    is2FAEnabled: boolean;
}
