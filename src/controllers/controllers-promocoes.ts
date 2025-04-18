import { Response, Request } from "express";
import ServicePromocoes from "../services/service-promocoes";
import InterfaceResponsePromotions from "../interfaces/Promotions/interface-response";
import CreatePromototionsDTO from "../dtos/Promotions/dto-create-promo";
import PromotionsUpdateDTO from "../dtos/Promotions/dto-update-promo";
import { getFromCache } from "../utils/cache";
import { setFromCache } from "../utils/cache";

export default class ControllersPromocoes {
    private servicePromotions: ServicePromocoes;
    constructor() {
        this.servicePromotions = new ServicePromocoes();
    }

    async create(req:Request, res:Response): Promise<Response<InterfaceResponsePromotions>> {
        try {
            const {name, description, price, image_url} = req.body;
            
            if(!name || !description || !price || !image_url) return res.json({message: 'you need to fill in all the fields', status: 404});

            const createPromotions = new CreatePromototionsDTO(name, description, description, image_url);

            const promotions = this.servicePromotions.createService(createPromotions);

            if(!promotions) return res.json({message: 'Failed to create promotions', status: 404});

            return res.json({message: 'create promotions with successfully', promotions});
        }catch(error) {
            console.error('Failed to create promotions', error);
            return res.status(500).json({ message: 'Failed to create promotions', status: 500});
        }
    }

    async getAll(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions>> {
        try {
            const promotions = await this.servicePromotions.getAllService();
            if (!promotions || promotions.length <= 0) return res.json({ message: 'No promotions found in the database', status: 404 });

            
            const cachePromotoions = await getFromCache('promoções');
            if(!cachePromotoions) {
                await setFromCache('promoções', promotions);
            }
            
            return res.json({
                message: 'Find all promotions successfully',
                status: 200,
                promotions // Retorna o array de DTOs no formato esperado
            });
        } catch (error) {
            console.error('Failed to find all promotions', error);
            return res.status(500).json({ message: 'Failed to find all promotions', status: 500 });
        }
    }

    async getById(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions>> {
        try {
            const { id } = req.params;
            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });
            const promotions = await this.servicePromotions.getByIdService(1);
            if (!promotions) return res.json({ message: 'No promotions found in the database', status: 404 });
          
            return res.json({
                message: 'find all promotions successfully',
                status: 200,
                data:promotions
            });
        } catch (error) {
            console.error('Failed to find by "id" promotions', error);
            return res.status(500).json({ message: 'Failed to find all promotions', status: 500 });
        }
    }

    async update(req: Request, res: Response): Promise<Response<InterfaceResponsePromotions>> {
        try {
            const { id } = req.params;

            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });
            const { name, description, price, image_url} = req.body;

            if (!name && !description && !price && !image_url) return res.json({ message: 'you need to at least change one field' })
            const promotions = await this.servicePromotions.getByIdService(Number(id));

            if (!promotions || promotions == null) return res.json({ message: 'No promotions found in the database', status: 404 });

            const promotionsUpdateDTO = new PromotionsUpdateDTO(
                name, 
                description,
                price,
                image_url,
            )
            const updatePromotions = await this.servicePromotions.updateService(Number(id), promotionsUpdateDTO);

            if (!updatePromotions) {
                return res.status(404).json({ message: 'Promotions not found or failed to update', status: 404 });
            }

            return res.json({
                message: 'Promotions updated successfully by ID',
                status: 200,
                updatePromotions,  // Retorna o hambúrguer atualizado
            });
        } catch (error) {
            console.error('Failed to update by "id" promotions', error);
            return res.status(500).json({ message: 'Failed to update promotions', status: 500 });
        }
    }

    async exclude(req: Request, res:Response): Promise<Response<InterfaceResponsePromotions>> {
        try {
            const { id } = req.params;

            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });

            const promotions = await this.servicePromotions.getByIdService(Number(id));
            if (!promotions || promotions == null) return res.json({ message: 'No promotions found in the database', status: 404 });

            const deletePromotions = await this.servicePromotions.excludeService(Number(id));

            if (!deletePromotions) {
                return res.status(404).json({ message: 'Promotions not found or failed to delete', status: 404 });
            }


            return res.json({
                message: 'Promotions deleted successfully by ID',
                status: 200,
                deletePromotions,  // Retorna o hambúrguer atualizado
            });
        } catch (error) {
            console.error('Failed to update by "id" promotions', error);
            return res.status(500).json({ message: 'Failed to update promotions', status: 500 });
        }
    }
}