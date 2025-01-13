import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import RoleEntities from "../Roles/entities-roles-get";

@Entity('permissions')
export default class PermissionEntities {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    permission_name!: string;

    @Column()
    description!: string;

    @ManyToMany(() => RoleEntities, (role) => role.permissions)
    roles!: RoleEntities[];

}