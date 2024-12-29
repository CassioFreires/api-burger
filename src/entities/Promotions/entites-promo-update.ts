import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import InterfaceUpdatePromotions from "../../interfaces/Promotions/interface-update-promo";

@Entity('promotions')
export default class UpdatePromotionsEntites implements InterfaceUpdatePromotions {
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