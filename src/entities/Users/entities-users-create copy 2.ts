import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import InterfaceCreateUser from "../../interfaces/Users/interface-create-user";

@Entity('users')
export default class CreateUserEntities implements InterfaceCreateUser {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password_hash!: string;

  @Column({ type: 'int', default: 3 })
  role_id!: number; // Padrão 1 - Cliente

  @Column({ type: 'int', default: 1 })
  active!: number; // Padrão 1 - Ativo
 
}
