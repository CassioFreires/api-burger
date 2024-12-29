import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import InterfaceUpdateCombos from "../../interfaces/Combos/interface-update-combos";

@Entity('combos')
export default class CombosUpdateEntities implements InterfaceUpdateCombos {
    @PrimaryGeneratedColumn()
    combo_id!:number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column('decimal')
    price!: number;

}