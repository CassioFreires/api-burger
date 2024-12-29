import DataBase from "../database/DataBase";
import { QueryFailedError } from "typeorm";
import CombosEntities from "../entities/Combos/entities.combo.get";
import CombosUpdateEntities from "../entities/Combos/entities-combo-update";
import InterfaceUpdateCombos from "../interfaces/Combos/interface-update-combos";
import CombosDeleteEntities from "../entities/Combos/entities-combo-delete";
import CreateBurgersDTO from "../dtos/Burgers/dto-create-burgers";
import CreateCombosEntities from "../entities/Combos/entities-combo-create";
import CreateCombosDTO from "../dtos/Combos/dto-create.combos";

export default class ServiceCombos {
    database: DataBase;

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
                console.log(error.message);
                return null;
            } else {
                console.error('unexpected error  error create combos:', error);
                throw null;
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
            console.error('Failed to all combos')
            if (error instanceof QueryFailedError) {
                console.log(error.message);
                return null;
            } else {
                console.error('unexpected error find all combos:', error);
                throw null;
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
            console.log('unexpected error find by "id" all combos', error);

        }
    }

    async updateService(id: number, newCombos: InterfaceUpdateCombos) {
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
            console.log('unexpected error update all burgers', error);
            return null;
        }
    }

    async excludeService(id: number) {
        console.log(id)
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
            console.log('unexpected error delete all combos', error);
            return null;
        }
    }
}