import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, PrimaryColumn, Column, OneToMany, ManyToMany } from "typeorm";
import LoginEntities from "../Users/entities-users-login";
import PermissionEntities from "../Permissions/entities-permission-get";
import RoleEntities from "../Roles/entities-roles-get";

@Entity('role_permissions') // Nome da tabela
export default class RolePermissionEntities {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => RoleEntities, (role) => role.rolePermissions)
    @JoinColumn({ name: 'role_id' })
    role!: RoleEntities;

    @ManyToOne(() => PermissionEntities, (permission) => permission.roles)
    @JoinColumn({ name: 'permission_id' })
    permission!: PermissionEntities;
}