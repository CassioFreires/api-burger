import RoleEntities from "../Roles/entities-roles-get";
export default class PermissionEntities {
    id: number;
    permission_name: string;
    description: string;
    roles: RoleEntities[];
}
