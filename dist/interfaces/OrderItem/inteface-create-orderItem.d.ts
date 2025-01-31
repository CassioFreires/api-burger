export default interface InterfaceOrderItem {
    order_item_id: number;
    order_id: number;
    item_type: 'hamburger' | 'drink' | 'combo' | 'promotion';
    item_id: number;
    quantity: number;
    item_price: number;
}
