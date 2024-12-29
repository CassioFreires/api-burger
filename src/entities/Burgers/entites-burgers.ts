import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";
import InterfaceBurgers from "../../interfaces/Burgers/interface-burgers";


@Entity('hamburgers')

export default class BurgerEntities implements InterfaceBurgers {
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