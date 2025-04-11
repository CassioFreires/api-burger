import OrderEntities from "../../entities/Orders/entities-orders";
export default interface InterfaceResponseOrders {
    message: string;
    status: number;
    order?: OrderEntities;
    orders?: OrderEntities[];
}
