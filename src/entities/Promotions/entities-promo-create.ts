import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import InterfaceCreatePromotions from "../../interfaces/Promotions/interface-create-bromo";

@Entity('promotions')

export default class CreatePromotionsEntities implements InterfaceCreatePromotions {
    @PrimaryGeneratedColumn()
    promotion_id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column('decimal')
    price!: number;

    @Column()
    image_url!: string;
}