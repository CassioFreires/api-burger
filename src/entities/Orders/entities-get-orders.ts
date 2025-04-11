import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
  } from 'typeorm';
  import AddressEntities from '../Address/entities-address.get';
  import UserEntities from '../Users/entities-users-get';
  
  @Entity('orders')
  export default class OrderEntitiesGetAll {
    @PrimaryGeneratedColumn()
    order_id!: number;
  
    @Column()
    id_user!: number;
  
    @Column()
    id_endereco!: number;
  
    @Column()
    id_pedido!: number;
  
    @Column()
    nome!: string;
  
    @Column()
    sobrenome!: string;
  
    @Column()
    email!: string;
  
    @Column()
    celular!: string;
  
    @Column()
    forma_de_pagamento!: string;
  
    @Column()
    metodo_de_entrega!: string;
  
    @Column()
    status_do_pedido!: string;
  
    @Column('decimal', { precision: 10, scale: 2 })
    total_value!: number;
  
    @Column()
    data_hora_pedido!: Date;
  
    @Column('json')
    items_do_pedido!: any[];
  
    @ManyToOne(() => UserEntities)
    @JoinColumn({ name: 'id_user' })
    user!: UserEntities;
  
    @ManyToOne(() => AddressEntities)
    @JoinColumn({ name: 'id_endereco' })
    endereco!: AddressEntities;
  }
  