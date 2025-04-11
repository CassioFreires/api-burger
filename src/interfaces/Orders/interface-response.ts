import OrderEntities from "../../entities/Orders/entities-orders";

export default interface InterfaceResponseOrders {
    message: string;
    status: number;
    order?: OrderEntities;  // Um pedido específico
    orders?: OrderEntities[];  // Lista de pedidos
}
