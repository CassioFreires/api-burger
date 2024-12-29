import InterfaceDeleteBurgers from "../../interfaces/Burgers/interface-delete-burgers";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('hamburgers')
export default class BurgerEntities implements InterfaceDeleteBurgers {
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