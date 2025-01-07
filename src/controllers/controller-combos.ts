import express from 'express';
import { Request, Response } from 'express';
import InterfaceResponseCombos from '../interfaces/Combos/interface-response';
import { CombosDTO } from '../dtos/Combos/dto-get-combos';
import ServiceCombos from '../services/service-combos';
import CombosUpdateDTO from '../dtos/Combos/dto-update-combos';
import CreateCombosDTO from '../dtos/Combos/dto-create.combos';

export default class ControllerCombos {
    private serviceCombos: ServiceCombos;
    constructor() {
        this.serviceCombos = new ServiceCombos();
    }

    async create(req: Request, res: Response): Promise<Response<InterfaceResponseCombos>> {
        try {
            const { name, description, price } = req.body;

            if (!name || !description || !price) return res.json({ message: 'you need to fill in all the fields', status: 404 });

            const createCombos = new CreateCombosDTO(name, description, price);

            const combos = this.serviceCombos.createService(createCombos);
            if (!combos) return res.json({ message: 'Failed to create combos', status: 404 });

            return res.json({ message: 'create combos with successfully', createCombos });
        } catch (error) {
            console.error('Failed to create combos', error);
            return res.status(500).json({ message: 'Failed to create combos', status: 500 });
        }
    }

    async getAll(req: Request, res: Response): Promise<Response<InterfaceResponseCombos>> {
        try {
            const combos = await this.serviceCombos.getAllService();
            if (!combos || combos.length <= 0) return res.json({ message: 'No combos found in the database', status: 404 });

            return res.json({
                message: 'Find all combos successfully',
                status: 200,
                combos: combos // Retorna o array de DTOs no formato esperado
            });
        } catch (error) {
            console.error('Failed to find all combos', error);
            return res.status(500).json({ message: 'Failed to find all combos', status: 500 });
        }
    }

    async getById(req: Request, res: Response): Promise<Response<InterfaceResponseCombos>> {
        try {
            const { id } = req.params;
            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });
            const combos = await this.serviceCombos.getByIdService(Number(id));
            if (!combos) return res.json({ message: 'No combos found in the database', status: 404 });

            return res.json({
                message: 'find all combos successfully',
                status: 200,
                combos: combos
            });
        } catch (error) {
            console.error('Failed to find by "id" combos', error);
            return res.status(500).json({ message: 'Failed to find all combos', status: 500 });
        }
    }

    async update(req: Request, res: Response): Promise<Response<InterfaceResponseCombos>> {
        try {
            const { id } = req.params;

            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });
            const { name, description, price } = req.body;

            if (!name && !description && !price) return res.json({ message: 'you need to at least change one field' })
            const combos = await this.serviceCombos.getByIdService(Number(id));

            if (!combos || combos == null) return res.json({ message: 'No combos found in the database', status: 404 });

            const combosUpdateDTO = new CombosUpdateDTO(
                name,
                description,
                price
            )
            const updatedCombos = await this.serviceCombos.updateService(Number(id), combosUpdateDTO);

            if (!updatedCombos) {
                return res.status(404).json({ message: 'combos not found or failed to update', status: 404 });
            }

            console.log(updatedCombos)

            return res.json({
                message: 'combos updated successfully by ID',
                status: 200,
                updatedCombos,  // Retorna o hambúrguer atualizado
            });
        } catch (error) {
            console.error('Failed to update by "id" combos', error);
            return res.status(500).json({ message: 'Failed to update combos', status: 500 });
        }
    }

    async exclude(req: Request, res: Response): Promise<Response<InterfaceResponseCombos>> {
        try {
            const { id } = req.params;

            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });

            const combos = await this.serviceCombos.getByIdService(Number(id));
            if (!combos || combos == null) return res.json({ message: 'No combos found in the database', status: 404 });


            const deleteCombo = await this.serviceCombos.excludeService(combos.combo_id);

            if (!deleteCombo) {
                return res.status(404).json({ message: 'Burger not found or failed to delete', status: 404 });
            }


            return res.json({
                message: 'Burger deleted successfully by ID',
                status: 200,
                deleteCombo,  // Retorna o hambúrguer atualizado
            });
        } catch (error) {
            console.error('Failed to update by "id" combos', error);
            return res.status(500).json({ message: 'Failed to update combos', status: 500 });
        }
    }
}