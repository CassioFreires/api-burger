import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import InterfaceUpdateDrinks from "../../interfaces/Drinks/interface-update-drinks";

@Entity('drinks')
export default class UpdateDrinksEntites implements InterfaceUpdateDrinks {
    @PrimaryGeneratedColumn()
    drink_id!:number

    @Column()
    name!:string;

    @Column('decimal')
    price!:number;

    @Column()
    description!: string;

    @Column()
    image_url!: string;
}