import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,CreateDateColumn, UpdateDateColumn } from "typeorm";
import RoleEntities from "../Roles/entities-roles-get"; // Relacionamento com a tabela R, oleEntities

@Entity('users')
export default class UserEntities {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;

    @Column()
    password_hash!: string;

}
