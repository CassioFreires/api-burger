import CreatePromototionsDTO from "../dtos/Promotions/dto-create-promo";
import PromotionsEntities from "../entities/Promotions/entites-promo-get";
import CreatePromotionsEntities from "../entities/Promotions/entities-promo-create";
import InterfaceUpdatePromotions from "../interfaces/Promotions/interface-update-promo";
import UpdatePromotionsEntites from "../entities/Promotions/entites-promo-update";
import DeletePromotionsEntities from "../entities/Promotions/entities-promo-delete";
export default class ServicePromocoes {
    private dataBase;
    constructor();
    createService(promotions: CreatePromototionsDTO): Promise<CreatePromototionsDTO & CreatePromotionsEntities>;
    getAllService(): Promise<PromotionsEntities[] | null>;
    getByIdService(id: number): Promise<PromotionsEntities | null>;
    updateService(id: number, newPromotions: InterfaceUpdatePromotions): Promise<UpdatePromotionsEntites | null>;
    excludeService(id: number): Promise<DeletePromotionsEntities | null>;
}
