import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import InterfaceDeleteCombos from "../../interfaces/Combos/interface-delete-combos";


@Entity('combos')
export default class CombosDeleteEntities implements InterfaceDeleteCombos {
    @PrimaryGeneratedColumn()
    combo_id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column('decimal')
    price!: number;
}