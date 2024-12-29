import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import InterfaceCreateDrinks from "../../interfaces/Drinks/interface-create-drinks";

@Entity('drinks')
export default class CreateDrinksEntities implements InterfaceCreateDrinks {
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