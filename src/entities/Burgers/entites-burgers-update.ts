import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import InterfaceUpdateBurgers from "../../interfaces/Burgers/interface-update-burgers";

@Entity('hamburgers')
export default class UpdateBurgersEntites implements InterfaceUpdateBurgers {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string;

    @Column('decimal')
    price!:number;

    @Column()
    description!: string;

    @Column()
    image_url!: string;
}