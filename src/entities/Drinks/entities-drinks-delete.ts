import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import InterfaceDeleteDrinks from "../../interfaces/Drinks/interface-delete-drinks";


@Entity('drinks')
export default class DeleteDrinksEntities implements InterfaceDeleteDrinks {
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