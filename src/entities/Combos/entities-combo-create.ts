import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import InterfaceCreateCombos from "../../interfaces/Combos/interface-create-combos";

@Entity('combos')

export default class CreateCombosEntities implements InterfaceCreateCombos {
    @PrimaryGeneratedColumn()
    combo_id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column('decimal')
    price!: number;

}