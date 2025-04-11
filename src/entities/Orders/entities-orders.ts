import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { InterfaceCreateOrder } from '../../interfaces/Orders/interface-create-order';


@Entity('orders')
export default class OrderEntities implements InterfaceCreateOrder {
  @PrimaryGeneratedColumn()
  order_id!: number;

  // foreins keys
  @Column()
  id_user!: number;

  @Column()
  id_pedido!: number;

  @Column()
  id_endereco!: number;

  @Column()
  nome!: string;

  @Column()
  sobrenome!: string;

  @Column()
  email!: string;

  @Column()
  celular!: string;

  @Column()
  forma_de_pagamento!: 'Cartão' | 'Pix';

  @Column()
  metodo_de_entrega!: 'Retirada no Balcão' | 'Delivery';

  @Column()
  status_do_pedido!: 'SOLICITADO' | 'PENDENTE' | 'ANDAMENTO' | 'FINALIZADO';

  @Column()
  total_value!: number;

  @Column()
  data_hora_pedido!: Date;

  @Column('json')
  items_do_pedido!: any[];


}
