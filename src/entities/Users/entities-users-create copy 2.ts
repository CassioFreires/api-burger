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
  password!: string;

  @Column({ type: 'int', default: 1 })
  role!: number; // Padrão 1 - Cliente

  @Column({ type: 'int', default: 1 })
  status!: number; // Padrão 1 - Ativo
 
}
