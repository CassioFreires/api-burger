import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import InterfaceUpdateAddress from "../../interfaces/Address/interface-update-address";

@Entity('address')  // Nome da tabela no banco de dados
export default class UpdateAddressEntities implements InterfaceUpdateAddress{
  @PrimaryGeneratedColumn()
  address_id!: number;  // Chave primária (int)

  @Column({ type: 'varchar', length: 255, nullable: true })
  street?: string;  // Logradouro (varchar(255), nullable)

  @Column({ type: 'varchar', length: 20, nullable: true })
  number?: string;  // Número (varchar(20), nullable)

  @Column({ type: 'varchar', length: 255, nullable: true })
  complement?: string | null;  // Complemento (varchar(255), nullable)

  @Column({ type: 'varchar', length: 255, nullable: true })
  neighborhood?: string;  // Bairro (varchar(255), nullable)

  @Column({ type: 'varchar', length: 20, nullable: true })
  zip_code?: string;  // CEP (varchar(20), nullable)

  @Column({ type: 'varchar', length: 255, nullable: true })
  city?: string;  // Cidade (varchar(255), nullable)

  @Column({ type: 'varchar', length: 2, nullable: true })
  state?: string;  // Estado (varchar(2), nullable)

  @Column({ type: 'varchar', length: 255, nullable: true })
  reference_point?: string | null;  // Ponto de referência (varchar(255), nullable)

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at!: Date | null;  // Data de atualização (timestamp, nullable)
}
