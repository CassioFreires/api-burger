import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import InterfaceDeletePromotions from "../../interfaces/Promotions/interface-delete-promo";


@Entity('promotions')
export default class DeletePromotionsEntities implements InterfaceDeletePromotions {
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