import RoleEntities from "../../entities/Roles/entities-roles-get";  // Entidade de Role
import PermissionEntities from "../../entities/Permissions/entities-permission-get";  // Entidade de Permission

export class LoginResponseDTO {
    id: number;
    email: string;
    role: {
        id: number;
        role_name: string;
        permissions: PermissionEntities[];  // Permissões associadas ao role
    };

    constructor(id: number, email: string, role: RoleEntities) {
        this.id = id;
        this.email = email;
        this.role = {
            id: role.id,
            role_name: role.role_name,
            permissions: role.permissions,  // Permissões associadas ao role
        };
    }
 
}
