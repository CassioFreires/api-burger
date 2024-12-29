import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import InterfacePromotions from "../../interfaces/Promotions/interface-get-promo";


@Entity('promotions')

export default class PromotionsEntities implements InterfacePromotions {
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