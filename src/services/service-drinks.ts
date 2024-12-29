import DataBase from "../database/DataBase";
import { QueryFailedError } from "typeorm";
import DrinksEntities from "../entities/Drinks/entites-drinks";
import InterfaceUpdateDrinks from "../interfaces/Drinks/interface-update-drinks";
import UpdateDrinksEntites from "../entities/Drinks/entites-drinks-update";
import DeleteDrinksEntities from "../entities/Drinks/entities-drinks-delete";
import CreateDrinksDTO from "../dtos/Drinks/dto-create-drinks";
import CreateDrinksEntities from "../entities/Drinks/entities-drinks-create";


export default class ServiceDrinks {
    dataBase: DataBase;

    constructor() {
        this.dataBase = new DataBase();
    }

    async createService(drinks: CreateDrinksDTO) {
        try {
            const drinksRepository = (await this.dataBase.connect()).getRepository(CreateDrinksEntities);
            return await drinksRepository.save(drinks);
        }
        catch (error) {
            console.error('failed error create drinks:', error);
            if (error instanceof QueryFailedError) {
                console.log(error.message);
                return null;
            } else {
                console.error('unexpected error  error create drinks:', error);
                throw null;
            }
        }
    }
    async getAllService() {
        try {
            const drinks = (await this.dataBase.connect()).getRepository(DrinksEntities).find({
                order: {
                    drink_id: 'ASC'
                }
            });
            return drinks;
        } catch (error) {
            console.error('Failed to all drinks')
            if (error instanceof QueryFailedError) {
                console.log(error.message);
                return null;
            } else {
                console.error('unexpected error find all drinks:', error);
                throw null;
            }
        }
    }
    async getByIdService(id: number) {
        try {
            const drinks = (await this.dataBase.connect()).getRepository(DrinksEntities).findOne({
                where: {
                    drink_id: id
                }
            })
            return drinks;
        } catch (error) {
            console.log('unexpected error find by "id" all drinks', error);
            
        }
    }
    async updateService(id: number, newDrinks: InterfaceUpdateDrinks) {
        try {
            const updateRepository = (await this.dataBase.connect()).getRepository(UpdateDrinksEntites);
            const update_drinks = await updateRepository.findOneBy({
                drink_id: id
            });

            if (update_drinks) {
                update_drinks.name = newDrinks.name;
                update_drinks.description = newDrinks.description;
                update_drinks.price = newDrinks.price;
                update_drinks.image_url = newDrinks.image_url;
                await updateRepository.save(update_drinks);
                console.log('Drinks update with successfully')
                return update_drinks;
            }
            else {
                console.log('Drinks not found  for update');
                return null
            }
        } catch (error) {
            console.log('unexpected error update all drinks', error);
            return null;
        }
    }
    async excludeService(id: number) {
        try {
            const updateRepository = (await this.dataBase.connect()).getRepository(DeleteDrinksEntities);
            const update_drink = await updateRepository.findOneBy({ drink_id: id });
            if (update_drink) {
                await updateRepository.remove(update_drink);
                console.log('Drinks delete with successfully')
                return update_drink;
            } else {
                console.log('drinks not found for deleted');
                return null
            }

        } catch (error) {
            console.log('unexpected error delete all drinks', error);
            return null;
        }
    }
}