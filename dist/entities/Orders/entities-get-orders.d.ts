import AddressEntities from '../Address/entities-address.get';
import UserEntities from '../Users/entities-users-get';
export default class OrderEntitiesGetAll {
    order_id: number;
    id_user: number;
    id_endereco: number;
    id_pedido: number;
    nome: string;
    sobrenome: string;
    email: string;
    celular: string;
    forma_de_pagamento: string;
    metodo_de_entrega: string;
    status_do_pedido: string;
    total_value: number;
    data_hora_pedido: Date;
    items_do_pedido: any[];
    user: UserEntities;
    endereco: AddressEntities;
}
