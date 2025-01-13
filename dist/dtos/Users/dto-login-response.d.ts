import RoleEntities from "../../entities/Roles/entities-roles-get";
import PermissionEntities from "../../entities/Permissions/entities-permission-get";
export declare class LoginResponseDTO {
    id: number;
    email: string;
    role: {
        id: number;
        role_name: string;
        permissions: PermissionEntities[];
    };
    constructor(id: number, email: string, role: RoleEntities);
}
