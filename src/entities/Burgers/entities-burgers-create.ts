import InterfaceCreateBurger from "../../interfaces/Burgers/interface-create-burger";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('hamburgers')

export default class CreateBurgersEntities implements InterfaceCreateBurger {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column('decimal')
    price!: number;

    @Column()
    image_url!: string;
}