export default interface InterfaceOrder {
    order_id: number;
    customer_id: number;
    total_price: number;
    status: string;
    order_date: Date;
    completed_at: Date | null;
    payment_method: string;
    delivery_address: string;
    delivery_time: Date;
}
