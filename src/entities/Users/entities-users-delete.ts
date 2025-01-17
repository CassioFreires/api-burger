import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import InterfaceDeleteUser from "../../interfaces/Users/interface-delete-user";

@Entity('users')
export default class DeleteUserEntities implements InterfaceDeleteUser {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password_hash!: string;

  @Column({ type: 'int', default: 3 })
  role_id!: number;

  @Column({ type: 'int', default: 1 })
  active!: number;

}
