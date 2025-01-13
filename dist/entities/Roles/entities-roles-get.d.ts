import LoginEntities from "../Users/entities-users-login";
import PermissionEntities from "../Permissions/entities-permission-get";
import RolePermissionEntities from "../Role_Permission/entities-rolePermission-get";
export default class RoleEntities {
    id: number;
    role_name: string;
    description: string;
    users: LoginEntities[];
    permissions: PermissionEntities[];
    rolePermissions: RolePermissionEntities[];
}
