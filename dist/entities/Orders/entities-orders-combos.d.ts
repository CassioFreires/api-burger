import { OrderEntities } from './entities-orders';
import CombosEntities from '../Combos/entities.combo.get';
export declare class OrderComboEntities {
    order_combo_id: number;
    order: OrderEntities;
    combo: CombosEntities;
    quantity: number;
    price: number;
}
