import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable } from "typeorm";
import LoginEntities from "../Users/entities-users-login";
import PermissionEntities from "../Permissions/entities-permission-get";
import RolePermissionEntities from "../Role_Permission/entities-rolePermission-get";

@Entity('roles')
export default class RoleEntities {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    role_name!: string;

    @Column()
    description!: string;

    @OneToMany(() => LoginEntities, (user) => user.roles)
    users!:LoginEntities[]

    @ManyToMany(() => PermissionEntities, (permission) => permission.roles)
    @JoinTable({ name: 'role_permissions', joinColumn: { name: 'role_id', referencedColumnName: 'id' }, inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' } })
    permissions!: PermissionEntities[];

    @OneToMany(() => RolePermissionEntities, (rolePermission) => rolePermission.role)
    rolePermissions!: RolePermissionEntities[];
}
