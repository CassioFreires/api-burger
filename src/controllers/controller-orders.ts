import { Request, Response } from 'express';
import ServiceOrders from '../services/service-orders';
import ServiceAddress from '../services/service-address';
import { OrderUpdateStatusDTO } from '../dtos/Orders/dto-updateStatus-order';

export default class ControllerOrders {
    private serviceOrders: ServiceOrders;
    private serviceAddress: ServiceAddress;

    constructor() {
        this.serviceOrders = new ServiceOrders();
        this.serviceAddress = new ServiceAddress();
    }

    // Criação de pedido
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { order } = req.body;
            const userId = req.user.id; // Substituir por id autenticado, se tiver login

            if (!order || typeof order !== 'object') {
                return res.status(400).json({ message: 'Pedido inválido.' });
            }

            console.log("📦 Pedido recebido:", order);

            await new ServiceOrders().createService(order, userId);

            return res.status(201).json({
                message: "Pedido criado com sucesso!",
            });

        } catch (error) {
            console.error("❌ Erro completo:", JSON.stringify(error, null, 2));
            return res.status(500).json({
                message: "Erro interno ao criar pedido",
                error: error instanceof Error ? error.message : error,
            });
        }
    }



    // // Obter todos os pedidos
    async getAll(req: Request, res: Response): Promise<Response<Response>> {
        try {
            const orders = await this.serviceOrders.getAllService();
            console.log(orders)
            if (!orders || orders.length === 0) {
                return res.json({ message: 'No orders found', status: 404 });
            }

            return res.status(200).json({ message: 'Orders retrieved successfully', orders });
        } catch (error) {
            console.error('Failed to retrieve orders', error);
            return res.status(500).json({ message: 'Internal server error', status: 500 });
        }
    }

    // // Atualizar pedido
    async updateStatus(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;

            if (!id || isNaN(Number(id))) {
                return res.status(400).json({ message: '❌ ID inválido', status: 400 });
            }

            const { status, total_price } = req.body;

            if (!status && !total_price) {
                return res.status(400).json({
                    message: '⚠️ Forneça ao menos um campo para atualizar: "status" ou "total_price"',
                    status: 400
                });
            }

            const orderUpdateDTO = new OrderUpdateStatusDTO(status, total_price);
            const updatedOrder = await this.serviceOrders.updateOrderService(Number(id), orderUpdateDTO);

            if (!updatedOrder) {
                return res.status(404).json({ message: '❌ Pedido não encontrado ou falha ao atualizar', status: 404 });
            }

            return res.status(200).json({
                message: '✅ Pedido atualizado com sucesso!',
                updatedOrder
            });

        } catch (error) {
            console.error('❌ Falha ao atualizar pedido:', error);
            return res.status(500).json({
                message: '🚨 Erro interno ao atualizar pedido',
                status: 500
            });
        }
    }


    // // Obter pedido por ID
    // async getById(req: Request, res: Response): Promise<Response<InterfaceResponseOrders>> {
    //     try {
    //         const { id } = req.params;
    //         if (!id || isNaN(Number(id))) {
    //             return res.json({ message: 'Invalid ID', status: 400 });
    //         }

    //         const order = await this.serviceOrders.getByIdService(Number(id));
    //         if (!order) {
    //             return res.json({ message: 'Order not found', status: 404 });
    //         }

    //         return res.status(200).json({ message: 'Order retrieved successfully', order });
    //     } catch (error) {
    //         console.error('Failed to retrieve order', error);
    //         return res.status(500).json({ message: 'Internal server error', status: 500 });
    //     }
    // }



    // // Excluir pedido
    // async exclude(req: Request, res: Response): Promise<Response<InterfaceResponseOrders>> {
    //     try {
    //         const { id } = req.params;
    //         if (!id || isNaN(Number(id))) {
    //             return res.json({ message: 'Invalid ID', status: 400 });
    //         }

    //         const deletedOrder = await this.serviceOrders.deleteService(Number(id));
    //         if (!deletedOrder) {
    //             return res.status(404).json({ message: 'Order not found or failed to delete', status: 404 });
    //         }

    //         return res.status(200).json({ message: 'Order deleted successfully', deletedOrder });
    //     } catch (error) {
    //         console.error('Failed to delete order', error);
    //         return res.status(500).json({ message: 'Internal server error', status: 500 });
    //     }
    // }
}
