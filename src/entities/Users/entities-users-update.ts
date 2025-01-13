import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import InterfaceUpdateUser from "../../interfaces/Users/interface-update-user";

@Entity('users')
export default class UpdateUserEntities implements InterfaceUpdateUser {
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
