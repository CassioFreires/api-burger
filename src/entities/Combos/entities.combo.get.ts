import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import InterfaceCombos from "../../interfaces/Combos/interface-get-combos";


@Entity('combos')
export default class CombosEntities implements InterfaceCombos {
    @PrimaryGeneratedColumn()
    combo_id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column('decimal')
    price!: number;
}