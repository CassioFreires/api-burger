import DataBase from "../database/DataBase";
import BurgerEntities from "../entities/Burgers/entites-burgers";
import { QueryFailedError } from "typeorm";
import InterfaceUpdateBurgers from "../interfaces/Burgers/interface-update-burgers";
import UpdateBurgersEntites from "../entities/Burgers/entites-burgers-update";
import DeleteBurgersDTO from "../dtos/Burgers/dto-delete-burgers";
import CreateBurgersDTO from "../dtos/Burgers/dto-create-burgers";
import CreateBurgersEntities from "../entities/Burgers/entities-burgers-create";

export default class ServiceBurger {
    dataBase: DataBase;

    constructor() {
        this.dataBase = new DataBase();
    }

    async createService(burger: CreateBurgersDTO) {
        try {
            console.log(burger)
            const burgersRepository = (await this.dataBase.connect()).getRepository(CreateBurgersEntities);
            return await burgersRepository.save(burger);
        }
        catch (error) {
            console.error('failed error create burger:', error);
            if (error instanceof QueryFailedError) {
                console.log(error.message);
                return null;
            } else {
                console.error('unexpected error  error create burger:', error);
                throw null;
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
            console.error('Failed to all burger')
            if (error instanceof QueryFailedError) {
                console.log(error.message);
                return null;
            } else {
                console.error('unexpected error find all burgers:', error);
                throw null;
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
            console.log('unexpected error find by "id" all burgers', error);
            
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
            console.log('unexpected error update all burgers', error);
            return null;
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
            console.log('unexpected error delete all burgers', error);
            return null;
        }
    }
}