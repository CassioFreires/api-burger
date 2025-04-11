import { InterfaceCreateOrder } from '../../interfaces/Orders/interface-create-order';
export default class OrderEntities implements InterfaceCreateOrder {
    order_id: number;
    id_user: number;
    id_pedido: number;
    id_endereco: number;
    nome: string;
    sobrenome: string;
    email: string;
    celular: string;
    forma_de_pagamento: 'Cartão' | 'Pix';
    metodo_de_entrega: 'Retirada no Balcão' | 'Delivery';
    status_do_pedido: 'SOLICITADO' | 'PENDENTE' | 'ANDAMENTO' | 'FINALIZADO';
    total_value: number;
    data_hora_pedido: Date;
    items_do_pedido: any[];
}
