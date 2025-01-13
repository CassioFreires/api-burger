import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import InterfaceLogin from "../../interfaces/Users/interface-login.user";
import RoleEntities from "../Roles/entities-roles-get";

@Entity('users')
export default class LoginEntities implements InterfaceLogin {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password_hash!: string;

    @ManyToOne(() => RoleEntities, (role) => role.users)
    @JoinColumn({ name: 'role_id' })
    roles!: RoleEntities;

    @Column({ default: true })
    active!: boolean;
}

