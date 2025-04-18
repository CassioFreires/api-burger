import { Request, Response } from 'express';
import InterfaceResponseDrinks from '../interfaces/Drinks/interface-response-drinks';
import ServiceDrinks from '../services/service-drinks';
import DrinksUpdateDTO from '../dtos/Drinks/dto-update-drinks';
import CreateDrinksDTO from '../dtos/Drinks/dto-create-drinks';
import { getFromCache } from '../utils/cache';
import { setFromCache } from '../utils/cache';

export default class ControllerDrinks {
    private serviceDrinks: ServiceDrinks;
    constructor() {
        this.serviceDrinks = new ServiceDrinks();
    }

    async create(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks>> {
        try {
            const { name, description, price, image_url} = req.body;

            if (!name || !description || !price || !image_url) return res.json({ message: 'you need to fill in all the fields', status: 404 });

            const createDrinks = new CreateDrinksDTO(name, description, price, image_url);
            
            const drinks = this.serviceDrinks.createService(createDrinks);
            if (!drinks) return res.json({ message: 'Failed to create drinks', status: 404 });

            return res.json({ message: 'create drinks with successfully', createDrinks });
        } catch (error) {
            console.error('Failed to create drinks', error);
            return res.status(500).json({ message: 'Failed to create drinks', status: 500 });
        }
    }

    async getAll(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks>> {
        try {
            const drinks = await this.serviceDrinks.getAllService();
            if (!drinks || drinks.length <= 0) return res.json({ message: 'No drinks found in the database', status: 404 });

            const cacheDrinks = await getFromCache('bebidas');
            if(!cacheDrinks) {
                await setFromCache('bebidas', drinks);
            }

            return res.json({
                message: 'Find all drinks successfully',
                status: 200,
                drinks: drinks // Retorna o array de DTOs no formato esperado
            });
        } catch (error) {
            console.error('Failed to find all drinks', error);
            return res.status(500).json({ message: 'Failed to find all drinks', status: 500 });
        }
    }

    async getById(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks>> {
        try {
            const { id } = req.params;
            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });
            const drinks = await this.serviceDrinks.getByIdService(Number(id));
            if (!drinks) return res.json({ message: 'No drinks found in the database', status: 404 });

            return res.json({
                message: 'find all drinks successfully',
                status: 200,
                drinks: drinks
            });
        } catch (error) {
            console.error('Failed to find by "id" drinks', error);
            return res.status(500).json({ message: 'Failed to find all drinks', status: 500 });
        }
    }

    async update(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks>>  {
        try {
            const { id } = req.params;

            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });
            const { name, description, price, img_url } = req.body;

            if (!name && !description && !price && !img_url) return res.json({ message: 'you need to at least change one field' })
            const drinks = await this.serviceDrinks.getByIdService(Number(id));

            if (!drinks || drinks == null) return res.json({ message: 'No drinks found in the database', status: 404 });

            const drinksUpdateDTO = new DrinksUpdateDTO(
                name,
                description,
                price,
                img_url
            )
            const drinksUpdate = await this.serviceDrinks.updateService(Number(id), drinksUpdateDTO);

            if (!drinksUpdate) {
                return res.status(404).json({ message: 'drinks not found or failed to update', status: 404 });
            }

            return res.json({
                message: 'drinks updated successfully by ID',
                status: 200,
                drinksUpdate,  // Retorna o drink atualizado
            });
        } catch (error) {
            console.error('Failed to update by "id" drinks', error);
            return res.status(500).json({ message: 'Failed to update drinks', status: 500 });
        }
    }

    async exclude(req: Request, res: Response): Promise<Response<InterfaceResponseDrinks>>  {
        try {
            const { id } = req.params;

            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });

            const drinks = await this.serviceDrinks.getByIdService(Number(id));
            if (!drinks || drinks == null) return res.json({ message: 'No drinks found in the database', status: 404 });

            const deleteCombo = await this.serviceDrinks.excludeService(drinks.drink_id);

            if (!deleteCombo) {
                return res.status(404).json({ message: 'Drinks not found or failed to delete', status: 404 });
            }


            return res.json({
                message: 'Drinks deleted successfully by ID',
                status: 200,
                deleteCombo,  // Retorna o Drink atualizado
            });
        } catch (error) {
            console.error('Failed to update by "id" drinks', error);
            return res.status(500).json({ message: 'Failed to update drinks', status: 500 });
        }
    }
}