import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity('address')  // Nome da tabela no banco de dados
export default class CreateAddressEntity {
  @PrimaryGeneratedColumn()
  address_id!: number;  // Chave primária (int)

  @Column()
  user_id!: number;  // Chave estrangeira para o usuário (int)

  @Column({ type: 'varchar', length: 255 })
  street!: string;  // Logradouro (varchar(255))

  @Column({ type: 'varchar', length: 20 })
  number!: string;  // Número (varchar(20))

  @Column({ type: 'varchar', length: 255, nullable: true })
  complement!: string | null;  // Complemento (varchar(255), nullable)

  @Column({ type: 'varchar', length: 255 })
  neighborhood!: string;  // Bairro (varchar(255))

  @Column({ type: 'varchar', length: 20 })
  zip_code!: string;  // CEP (varchar(20))

  @Column({ type: 'varchar', length: 255 })
  city!: string;  // Cidade (varchar(255))

  @Column({ type: 'varchar', length: 2 })
  state!: string;  // Estado (varchar(2))

  @Column({ type: 'varchar', length: 255, nullable: true })
  reference_point!: string | null;  // Ponto de referência (varchar(255), nullable)

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at!: Date | null;  // Data de criação (timestamp, nullable)
}
