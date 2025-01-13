import { Response, Request } from "express";
import ServiceBurger from "../services/services-burgers";
import InterfaceResponseBurgers from "../interfaces/Burgers/interface-response";
import { BurgersDTO } from "../dtos/Burgers/dto-burgers";
import BurgersUpdateDTO from "../dtos/Burgers/dto-update-burgers";
import CreateBurgersDTO from "../dtos/Burgers/dto-create-burgers";
import DeleteBurgersDTO from "../dtos/Burgers/dto-delete-burgers";

export default class ControllerBurger {
    private serviceBurger: ServiceBurger;

    constructor() {
        this.serviceBurger = new ServiceBurger();
    }

    async create(req:Request, res:Response): Promise<Response<InterfaceResponseBurgers>> {
        try {
            const {name, description, price, image_url} = req.body;
            
            if(!name || !description || !price || !image_url) return res.json({message: 'you need to fill in all the fields', status: 404});

            const createBurgersDTO = new CreateBurgersDTO(name, description, price, image_url);
            const burgers = this.serviceBurger.createService(createBurgersDTO);

            if(!burgers) return res.json({message: 'Failed to create burger', status: 404});

            return res.json({message: 'create burger with successfully', burgers});
        }catch(error) {
            console.error('Failed to create burger', error);
            return res.status(500).json({ message: 'Failed to create burgers', status: 500, error });
        }
    }

    async getAll(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers>> {
        try {
            const burgers = await this.serviceBurger.getAllService();
            if (!burgers || burgers.length <= 0) return res.json({ message: 'No burgers found in the database', status: 404 });

            return res.json({
                message: 'Find all burgers successfully',
                status: 200,
                burgers // Retorna o array de DTOs no formato esperado
            });
        } catch (error) {
            console.error('Failed to find all burgers', error);
            return res.status(500).json({ message: 'Failed to find all burgers', status: 500, error });
        }
    }

    async getById(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers>> {
        try {
            const { id } = req.params;
            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });

            const burgers = await this.serviceBurger.getByIdService(5);
            if (!burgers) return res.json({ message: 'No burgers found in the database', status: 404 });


            const burgersDTO =  new BurgersDTO(
                burgers.id,
                burgers.name,
                burgers.description,
                burgers.price,
                burgers.image_url
            );
            
            return res.json({
                message: 'find all burgers successfully',
                status: 200,
                burgersDTO
            });
        } catch (error) {
            console.error('Failed to find by "id" burgers', error);
            return res.status(500).json({ message: 'Failed to find all burgers', status: 500 });
        }
    }

    async update(req: Request, res: Response): Promise<Response<InterfaceResponseBurgers>> {
        try {
            const { id } = req.params;

            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });
            const { name, price, image_url, description } = req.body;

            if (!name && !price && !image_url && !description) return res.json({ message: 'you need to at least change one field' })
            const burgers = await this.serviceBurger.getByIdService(5);

            if (!burgers || burgers == null) return res.json({ message: 'No burgers found in the database', status: 404 });

            const burgersUpdateDTO = new BurgersUpdateDTO(
                name,
                description,
                price,
                image_url,
            )
            const updatedBurger = await this.serviceBurger.updateService(Number(id), burgersUpdateDTO);

            if (!updatedBurger) {
                return res.status(404).json({ message: 'Burger not found or failed to update', status: 404 });
            }

            console.log(updatedBurger)

            return res.json({
                message: 'Burger updated successfully by ID',
                status: 200,
                updatedBurger,  // Retorna o hambúrguer atualizado
            });
        } catch (error) {
            console.error('Failed to update by "id" burgers', error);
            return res.status(500).json({ message: 'Failed to update burgers', status: 500 });
        }
    }

    async exclude(req: Request, res:Response): Promise<Response<InterfaceResponseBurgers>> {
        try {
            const { id } = req.params;

            if (!id || isNaN(Number(id))) return res.send({ message: 'ID card invalid' });

            const burgers = await this.serviceBurger.getByIdService(1000);
            if (!burgers || burgers == null) return res.json({ message: 'No burgers found in the database', status: 404 });

            const newDeleteBurger = new DeleteBurgersDTO(
                burgers.id,
                burgers.name,
                burgers.description,
                burgers.price,
                burgers.image_url
            );

            const deleteBurger = await this.serviceBurger.excludeService(Number(id));

            if (!deleteBurger) {
                return res.status(404).json({ message: 'Burger not found or failed to delete', status: 404 });
            }


            return res.json({
                message: 'Burger deleted successfully by ID',
                status: 200,
                newDeleteBurger,  // Retorna o hambúrguer atualizado
            });
        } catch (error) {
            console.error('Failed to update by "id" burgers', error);
            return res.status(500).json({ message: 'Failed to update burgers', status: 500 });
        }
    }
}