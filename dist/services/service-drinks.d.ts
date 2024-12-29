import DataBase from "../database/DataBase";
import DrinksEntities from "../entities/Drinks/entites-drinks";
import InterfaceUpdateDrinks from "../interfaces/Drinks/interface-update-drinks";
import UpdateDrinksEntites from "../entities/Drinks/entites-drinks-update";
import DeleteDrinksEntities from "../entities/Drinks/entities-drinks-delete";
import CreateDrinksDTO from "../dtos/Drinks/dto-create-drinks";
import CreateDrinksEntities from "../entities/Drinks/entities-drinks-create";
export default class ServiceDrinks {
    dataBase: DataBase;
    constructor();
    createService(drinks: CreateDrinksDTO): Promise<(CreateDrinksDTO & CreateDrinksEntities) | null>;
    getAllService(): Promise<DrinksEntities[] | null>;
    getByIdService(id: number): Promise<DrinksEntities | null | undefined>;
    updateService(id: number, newDrinks: InterfaceUpdateDrinks): Promise<UpdateDrinksEntites | null>;
    excludeService(id: number): Promise<DeleteDrinksEntities | null>;
}
