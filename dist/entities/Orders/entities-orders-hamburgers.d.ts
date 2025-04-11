import BurgerEntities from '../Burgers/entites-burgers';
import { OrderEntities } from './entities-orders';
export declare class OrderHamburgerEntities {
    order_hamburger_id: number;
    order: OrderEntities;
    hamburger: BurgerEntities;
    quantity: number;
    price: number;
}
