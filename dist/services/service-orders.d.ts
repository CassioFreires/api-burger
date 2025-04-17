import OrderEntitiesGetAll from "../entities/Orders/entities-get-orders";
import { OrderUpdateStatusDTO } from "../dtos/Orders/dto-updateStatus-order";
export default class ServiceOrders {
    private database;
    constructor();
    createService(orderDTO: any, userId: number): Promise<void>;
    getByIdService(idOrder: number): Promise<OrderEntitiesGetAll | null>;
    getAllService(): Promise<OrderEntitiesGetAll[]>;
    updateOrderService(id: number, orderUpdateDTO: OrderUpdateStatusDTO): Promise<any>;
    excludeService(id: number): Promise<{
        message: string;
    } | null>;
}
