import { OrderEntities } from './entities-orders';
import PromotionsEntities from '../Promotions/entites-promo-get';
export declare class OrderPromotionEntities {
    order_promotion_id: number;
    order: OrderEntities;
    promotion: PromotionsEntities;
    price: number;
}
