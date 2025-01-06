import DataBase from "../database/DataBase";
import BurgerEntities from "../entities/Burgers/entites-burgers";
import { QueryFailedError } from "typeorm";
import InterfaceUpdateBurgers from "../interfaces/Burgers/interface-update-burgers";
import UpdateBurgersEntites from "../entities/Burgers/entites-burgers-update";
import DeleteBurgersDTO from "../dtos/Burgers/dto-delete-burgers";
import CreateBurgersDTO from "../dtos/Burgers/dto-create-burgers";
import CreateBurgersEntities from "../entities/Burgers/entities-burgers-create";

export default class ServiceBurger {
    private dataBase: DataBase;

    constructor() {
        this.dataBase = new DataBase();
    }

    async createService(createBurgerDTO: CreateBurgersDTO) {
        try {
            const burgersRepository = (await this.dataBase.connect()).getRepository(CreateBurgersEntities);

            const newBurguers = new CreateBurgersEntities();

            newBurguers.name = createBurgerDTO.name;
            newBurguers.description = createBurgerDTO.description;
            newBurguers.price = createBurgerDTO.price;
            newBurguers.image_url = createBurgerDTO.image_url;

            return await burgersRepository.save(newBurguers);
        }
        catch (error) {
            console.error('failed error create burger:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error saving hamburguer to database:', error.message);
                throw new Error('Failed to create hamburguer');
            } else {
                console.error('Unexpected error in createService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
    async getAllService() {
        try {
            const burgers = (await this.dataBase.connect()).getRepository(BurgerEntities).find({
                order: {
                    id: 'ASC'
                }
            });
            return burgers;
        } catch (error) {
            console.error('failed error find burger:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error find hamburguer to database:', error.message);
                throw new Error('Failed to find all hamburguers');
            } else {
                console.error('Unexpected error in getAllHamburguers:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
    async getByIdService(id: number) {
        try {
            const burgers = (await this.dataBase.connect()).getRepository(BurgerEntities).findOne({
                where: {
                    id: id
                }
            })
            return burgers;
        } catch (error) {
            console.error('failed error find by "id" burger:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error find hamburguer to database:', error.message);
                throw new Error('Failed to find by "id" hamburguer');
            } else {
                console.error('Unexpected error in "getById" Hamburguer:', error);
                throw new Error('Unexpected error occurred');
            }

        }
    }
    async updateService(id: number, newBurger: InterfaceUpdateBurgers) {
        try {
            const updateRepository = (await this.dataBase.connect()).getRepository(UpdateBurgersEntites);
            const update_burger = await updateRepository.findOneBy({
                id: id
            });

            if (update_burger) {
                update_burger.name = newBurger.name;
                update_burger.description = newBurger.description;
                update_burger.price = newBurger.price;
                update_burger.image_url = newBurger.image_url;
                await updateRepository.save(update_burger);
                console.log('Hamburguer update with successfully')
                return update_burger;
            }
            else {
                console.log('Burger not found  for update');
                return null
            }
        } catch (error) {
            console.error('failed error update by "id" burger:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error update hamburguer to database:', error.message);
                throw new Error('Failed to update by "id" hamburguer');
            } else {
                console.error('Unexpected error in "update" Hamburguer:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
    async excludeService(id: number) {
        try {
            const updateRepository = (await this.dataBase.connect()).getRepository(DeleteBurgersDTO);
            const update_burger = await updateRepository.findOneBy({ id: id });
            if (update_burger) {
                await updateRepository.remove(update_burger);
                console.log('Hamburguer delete with successfully')
                return update_burger;
            } else {
                console.log('Burger not found for deleted');
                return null
            }

        } catch (error) {
            console.error('failed error delete by "id" burger:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error delete hamburguer to database:', error.message);
                throw new Error('Failed to delete by "id" hamburguer');
            } else {
                console.error('Unexpected error in "delete" Hamburguer:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
}