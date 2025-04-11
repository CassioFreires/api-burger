export default class OrderDTO {
    user_id: number;
    address_id: number;
    total_price: number;
    order_status: 'PENDING' | 'COMPLETED' | 'CANCELED' | 'DELIVERED';
    constructor(user_id: number, address_id: number, total_price: number, order_status: 'PENDING' | 'COMPLETED' | 'CANCELED' | 'DELIVERED');
}
