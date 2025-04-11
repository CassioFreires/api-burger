import DataBase from "../database/DataBase";
import { QueryFailedError } from "typeorm";
import CombosEntities from "../entities/Combos/entities.combo.get";
import CombosUpdateEntities from "../entities/Combos/entities-combo-update";
import InterfaceUpdateCombos from "../interfaces/Combos/interface-update-combos";
import CombosDeleteEntities from "../entities/Combos/entities-combo-delete";
import CreateBurgersDTO from "../dtos/Burgers/dto-create-burgers";
import CreateCombosEntities from "../entities/Combos/entities-combo-create";
import CreateCombosDTO from "../dtos/Combos/dto-create.combos";
import CombosUpdateDTO from "../dtos/Combos/dto-update-combos";

export default class ServiceCombos {
    private database: DataBase;

    constructor() {
        this.database = new DataBase();
    }

    async createService(combos: CreateCombosDTO) {
        try {
            const combosRepository = (await this.database.connect()).getRepository(CreateCombosEntities);
            return await combosRepository.save(combos);
        }
        catch (error) {
            console.error('failed error create combos:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error saving combos to database:', error.message);
                throw new Error('Failed to create combos');
            } else {
                console.error('Unexpected error in createCombosService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
    
    async getAllService() {
        try {
            const combos = (await this.database.connect()).getRepository(CombosEntities).find({
                order: {
                    combo_id: 'ASC'
                }
            });
            return combos;
        } catch (error) {
            console.error('failed error getAll combos:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error getAll combos to database:', error.message);
                throw new Error('Failed to getAll combos');
            } else {
                console.error('Unexpected error in getAllCombosService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

    async getByIdService(id: number) {
        try {
            const combos = (await this.database.connect()).getRepository(CombosEntities).findOne({
                where: {
                    combo_id: id
                }
            })
            return combos;
        } catch (error) {
            console.error('failed error get by "id" combos:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error get by "id" combos to database:', error.message);
                throw new Error('Failed to get by "id" combos');
            } else {
                console.error('Unexpected error in getByIdCombosService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

    async updateService(id: number, newCombos: CombosUpdateDTO) {
        try {
            const updateRepository = (await this.database.connect()).getRepository(CombosUpdateEntities);
            const update_combos = await updateRepository.findOneBy({
                combo_id: id
            });

            if (update_combos) {
                update_combos.name = newCombos.name;
                update_combos.description = newCombos.description;
                update_combos.price = newCombos.price;
                await updateRepository.save(update_combos);
                console.log('Hamburguer update with successfully')
                return update_combos;
            }
            else {
                console.log('Burger not found  for update');
                return null
            }
        } catch (error) {
            console.error('failed error update combos:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error update combos to database:', error.message);
                throw new Error('Failed to update combos');
            } else {
                console.error('Unexpected error in UpdateCombosService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

    async excludeService(id: number) {
        try {
            const updateRepository = (await this.database.connect()).getRepository(CombosDeleteEntities);
            const update_combos = await updateRepository.findOneBy({combo_id: id });
            if (update_combos) {
                await updateRepository.remove(update_combos);
                console.log('combos delete with successfully')
                return update_combos;
            } else {
                console.log('combos not found for deleted');
                return null
            }

        } catch (error) {
            console.error('failed error delete combos:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error delete combos to database:', error.message);
                throw new Error('Failed to delete combos');
            } else {
                console.error('Unexpected error in deleteCombosService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
}