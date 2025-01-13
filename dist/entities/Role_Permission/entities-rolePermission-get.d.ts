import PermissionEntities from "../Permissions/entities-permission-get";
import RoleEntities from "../Roles/entities-roles-get";
export default class RolePermissionEntities {
    id: number;
    role: RoleEntities;
    permission: PermissionEntities;
}
