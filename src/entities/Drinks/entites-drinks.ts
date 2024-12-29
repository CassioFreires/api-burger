import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import InterfaceDrinks from "../../interfaces/Drinks/interface-drinks";


@Entity('drinks')
export default class DrinksEntities implements InterfaceDrinks {
    @PrimaryGeneratedColumn()
    drink_id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column('decimal')
    price!: number;

    @Column()
    image_url!: string;
}