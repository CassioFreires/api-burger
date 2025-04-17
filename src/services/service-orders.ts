import DataBase from "../database/DataBase";
import OrderEntities from "../entities/Orders/entities-orders";
import OrderDTO from "../dtos/Orders/dto-create-orders";
import ordersRouter from "../routers/routers-orders";
import OrderEntitiesGetAll from "../entities/Orders/entities-get-orders";
import { OrderUpdateStatusDTO } from "../dtos/Orders/dto-updateStatus-order";

export default class ServiceOrders {
    private database: DataBase;

    constructor() {
        this.database = new DataBase();
    }

    // Método para criar um pedido com os itens
    async createService(orderDTO: any, userId: number) {
        try {
            const orderRepo = (await this.database.connect()).manager.getRepository(OrderEntities);

            const {
                id_pedido,
                id_endereco,
                id_user,
                nome,
                sobrenome,
                email,
                celular,
                pagamento,
                modoEntrega,
                taxaEntrega,
                status,
                orderItems,
                endereco,
                bairro,
                cep,
                cidade,
                estado,
                complemento,
                referencia
            } = orderDTO;

            console.log(id_endereco);
            console.log(id_user);
            // Validação básica
            if (!id_pedido || !id_endereco || !id_user || !nome || !sobrenome || !email || !celular || !pagamento || !modoEntrega || !status || !orderItems) {
                throw new Error("Campos obrigatórios ausentes no pedido.");
            }

            // Unifica todos os itens em um único array
            const categorias = ['hamburgueres', 'promocao', 'combo', 'bebidas'];
            const itens: any[] = [];

            categorias.forEach((categoria) => {
                const lista = orderItems[categoria];
                if (Array.isArray(lista)) {
                    lista.forEach((item, i) => {
                        if (!item.name || !item.price) {
                            throw new Error(`Item inválido em ${categoria} (índice ${i})`);
                        }
                        itens.push({
                            nome_produto: item.name,
                            preco_unitario: parseFloat(item.price),
                            categoria,
                            image_url: item.image_url || null,
                            quantidade: 1 // default
                        });
                    });
                }
            });

            // Calcula valor total (soma dos produtos + taxa de entrega)
            const valorProdutos = itens.reduce((acc, item) => acc + item.preco_unitario, 0);
            const totalValue = valorProdutos + parseFloat(taxaEntrega || 0);

            const novoPedido = orderRepo.create({
                id_user: userId,
                id_pedido,
                id_endereco, // pode ajustar se tiver entidade separada de endereço
                nome,
                sobrenome,
                email, // pode adicionar depois
                celular,
                forma_de_pagamento: pagamento.toUpperCase(), // 'PIX' ou 'CARTÃO'
                metodo_de_entrega: modoEntrega.toLowerCase() === 'delivery' ? 'Delivery' : 'Retirada no Balcão',
                status_do_pedido: status.toUpperCase(), // 'SOLICITADO'
                total_value: totalValue,
                data_hora_pedido: new Date(),
                items_do_pedido: itens // salvar como JSON
            });

            await orderRepo.save(novoPedido);
            console.log("✅ Pedido salvo no banco com sucesso!");

        } catch (err) {
            console.error("❌ Erro ao salvar pedido:", err);
            throw new Error("Erro ao criar pedido.");
        }
    }

    // Método para buscar um pedido com os itens 
    async getByIdService(idOrder: number) {
        try {
            const orderRepo = (await this.database.connect()).manager.getRepository(OrderEntitiesGetAll);
            const pedidos = await orderRepo.findOne({
                where: { order_id: idOrder },
                relations: ['user', 'endereco'],
                order: {
                    data_hora_pedido: 'DESC',
                },
            });

            console.log("✅ Busca dos pedidos realizados com sucesso!");

            return pedidos;

        } catch (err) {
            console.error("❌ Erro buscar pedidos:", err);
            throw new Error("Erro ao encontrar os pedidos.");
        }
    }

    async getAllService() {
        try {
            const orderRepo = (await this.database.connect()).manager.getRepository(OrderEntitiesGetAll);
            const pedidos = await orderRepo.find({
                relations: ['user', 'endereco'],
                order: {
                    data_hora_pedido: 'DESC',
                },
            });

            console.log("✅ Busca dos pedidos realizados com sucesso!");

            return pedidos;

        } catch (err) {
            console.error("❌ Erro buscar pedidos:", err);
            throw new Error("Erro ao encontrar os pedidos.");
        }
    }

    async updateOrderService(id: number, orderUpdateDTO: OrderUpdateStatusDTO) {
        try {
            const connection = await this.database.connect();
            const orderRepo = connection.manager.getRepository(OrderEntities);

            const order: any = await orderRepo.findOne({ where: { order_id: id } });

            if (!order) return null;

            if (orderUpdateDTO.status_do_pedido) {
                order.status_do_pedido = orderUpdateDTO.status_do_pedido;
            }

            if (orderUpdateDTO.total_value) {
                order.total_value = orderUpdateDTO.total_value;
            }

            await orderRepo.save(order);

            console.log(`✅ Pedido ${id} atualizado para status: ${order.status_do_pedido}`);

            return order;

        } catch (error) {
            console.error("❌ Erro ao atualizar pedido:", error);
            throw new Error("Erro ao atualizar pedido.");
        }
    }

    async excludeService(id: number) {
        try {
            const orderRepo = (await this.database.connect()).manager.getRepository(OrderEntities); // Certifique-se que aqui é a entidade, não o DTO

            // Busca o pedido pelo ID
            const order = await orderRepo.findOne({ where: { order_id: id } });

            if (!order) {
                console.log(`⚠️ Pedido com ID ${id} não encontrado.`);
                return null;
            }

            // Remove o pedido
            await orderRepo.remove(order);

            console.log(`🗑️ Pedido ${id} removido com sucesso!`);
            return { message: "Pedido removido com sucesso." };

        } catch (error) {
            console.error("❌ Erro ao remover pedido:", error);
            throw new Error("Erro ao remover pedido.");
        }
    }


}

