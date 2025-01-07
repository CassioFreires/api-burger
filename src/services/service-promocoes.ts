import DataBase from "../database/DataBase";
import { QueryFailedError } from "typeorm";
import CreatePromototionsDTO from "../dtos/Promotions/dto-create-promo";

import PromotionsEntities from "../entities/Promotions/entites-promo-get";
import CreatePromotionsEntities from "../entities/Promotions/entities-promo-create";
import InterfaceUpdatePromotions from "../interfaces/Promotions/interface-update-promo";
import UpdatePromotionsEntites from "../entities/Promotions/entites-promo-update";
import DeletePromotionsEntities from "../entities/Promotions/entities-promo-delete";

export default class ServicePromocoes {
    private dataBase: DataBase;

    constructor() {
        this.dataBase = new DataBase();
    }

    async createService(promotions: CreatePromototionsDTO) {
        try {
            const promotionsRepository = (await this.dataBase.connect()).getRepository(CreatePromotionsEntities);
            return await promotionsRepository.save(promotions);
        }
        catch (error) {
            console.error('failed error create promotions:', error);
            if (error instanceof QueryFailedError) {
                console.error('Error saving promotions to database:', error.message);
                throw new Error('Failed to create promotions');
            } else {
                console.error('Unexpected error in createPromotionsService:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
    async getAllService() {
        try {
            const burgers = (await this.dataBase.connect()).getRepository(PromotionsEntities).find({
                order: {
                    promotion_id: 'ASC'
                }
            });
            return burgers;
        } catch (error) {
            console.error('Failed to all promotions')
            if (error instanceof QueryFailedError) {
                console.log(error.message);
                return null;
            } else {
                console.error('unexpected error find all promotions:', error);
                throw null;
            }
        }
    }
    async getByIdService(id: number) {
        try {
            const promotions = (await this.dataBase.connect()).getRepository(PromotionsEntities).findOne({
                where: {
                    promotion_id: id
                }
            })
            return promotions;
        } catch (error) {
            if (error instanceof QueryFailedError) {
                console.error('Error find by "id" promotions to database:', error.message);
                throw new Error('Failed to find by "id" promotions');
            } else {
                console.error('Unexpected error in getByIdPromotions:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
    async updateService(id: number, newPromotions: InterfaceUpdatePromotions) {
        try {
            const updateRepository = (await this.dataBase.connect()).getRepository(UpdatePromotionsEntites);
            const update_promotions = await updateRepository.findOneBy({
                promotion_id: id
            });

            if (update_promotions) {
                update_promotions.name = newPromotions.name;
                update_promotions.description = newPromotions.description;
                update_promotions.price = newPromotions.price;
                update_promotions.image_url = newPromotions.image_url;
                await updateRepository.save(update_promotions);
                console.log('Promotions update with successfully')
                return update_promotions;
            }
            else {
                console.log('Promotions not found  for update');
                return null
            }
        } catch (error) {
            if (error instanceof QueryFailedError) {
                console.error('Error find by "id" promotions to database:', error.message);
                throw new Error('Failed to find by "id" promotions');
            } else {
                console.error('Unexpected error in getByIdPromotions:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
    async excludeService(id: number) {
        try {
            const updateRepository = (await this.dataBase.connect()).getRepository(DeletePromotionsEntities);
            const delete_promotions = await updateRepository.findOneBy({ promotion_id: id });
            console.log(delete_promotions)
            if (delete_promotions) {
                await updateRepository.remove(delete_promotions);
                console.log('Promotions delete with successfully')
                return delete_promotions;
            } else {
                console.log('Promotions not found for deleted');
                return null
            }

        } catch (error) {
            if (error instanceof QueryFailedError) {
                console.error('Error find by "id" promotions to database:', error.message);
                throw new Error('Failed to find by "id" promotions');
            } else {
                console.error('Unexpected error in getByIdPromotions:', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }
}