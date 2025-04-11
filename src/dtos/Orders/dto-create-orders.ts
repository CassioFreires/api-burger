export default class OrderDTO {
    user_id: number;
    address_id: number;
    total_price: number;
    order_status: 'PENDING' | 'COMPLETED' | 'CANCELED' | 'DELIVERED'

    constructor(user_id: number, address_id: number, total_price: number, order_status:'PENDING' | 'COMPLETED' | 'CANCELED' | 'DELIVERED') {
        this.user_id = user_id;
        this.address_id = address_id;
        this.total_price = total_price;
        this.order_status = order_status;
    }
}
