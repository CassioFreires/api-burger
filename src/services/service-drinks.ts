import DataBase from "../database/DataBase";
import { QueryFailedError } from "typeorm";
import DrinksEntities from "../entities/Drinks/entites-drinks";
import InterfaceUpdateDrinks from "../interfaces/Drinks/interface-update-drinks";
import UpdateDrinksEntites from "../entities/Drinks/entites-drinks-update";
import DeleteDrinksEntities from "../entities/Drinks/entities-drinks-delete";
import CreateDrinksDTO from "../dtos/Drinks/dto-create-drinks";
import CreateDrinksEntities from "../entities/Drinks/entities-drinks-create";


export default class ServiceDrinks {
    private dataBase: DataBase;

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
                console.error('Error saving drinks to database:', error.message);
                throw new Error('Failed to create drinks');
            } else {
                console.error('Unexpected error in createDrinksService:', error);
                throw new Error('Unexpected error occurred');
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
            console.error('failed error getAll drinks:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error getAll drinks to database:', error.message);
                throw new Error('Failed to getAll drinks');
            } else {
                console.error('Unexpected error in getAllDrinksService:', error);
                throw new Error('Unexpected error occurred');
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
            console.error('failed error get by "id" drinks:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error get by "id" drinks to database:', error.message);
                throw new Error('Failed to get by "id" drinks');
            } else {
                console.error('Unexpected error in getByIdDrinksService:', error);
                throw new Error('Unexpected error occurred');
            }
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
            console.error('failed error update drinks:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error update drinks to database:', error.message);
                throw new Error('Failed to update drinks');
            } else {
                console.error('Unexpected error in UpdateDrinksService:', error);
                throw new Error('Unexpected error occurred');
            }
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
            console.error('failed error delete drinks:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error delete drinks to database:', error.message);
                throw new Error('Failed to delete drinks');
            } else {
                console.error('Unexpected error in deleteDrinksService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
}