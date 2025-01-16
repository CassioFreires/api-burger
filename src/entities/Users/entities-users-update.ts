import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";
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
  password_hash!: string;

  @Column({type: 'int'})
  role_id?: number;

  @Column({ type: 'int'})
  active?: number;

}
