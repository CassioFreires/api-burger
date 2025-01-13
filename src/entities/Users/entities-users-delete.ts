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
  password!: string;

  @Column({ type: 'int', default: 1 })
  role!: number;

  @Column({ type: 'int', default: 1 })
  status!: number;

}
