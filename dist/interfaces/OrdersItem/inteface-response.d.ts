import OrderItemEntities from '../../entities/OrdersItem/entities-ordersItem';
export default interface InterfaceResponseOrderItems {
    message: string;
    status: number;
    orderItem?: OrderItemEntities;
    orderItems?: OrderItemEntities[];
}
