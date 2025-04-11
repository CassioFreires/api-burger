export default class OrderItemDTO {
    order_id: number;
    item_type: 'HAMBURGUER' | 'BEBIDA' | 'PROMOCAO' | 'COMBO';
    item_id: number;
    quantity: number;
    price: number;
    constructor(order_id: number, item_id: number, item_type: 'HAMBURGUER' | 'BEBIDA' | 'PROMOCAO' | 'COMBO', quantity: number, price: number);
}
