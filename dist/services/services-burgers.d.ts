import DataBase from "../database/DataBase";
import BurgerEntities from "../entities/Burgers/entites-burgers";
import InterfaceUpdateBurgers from "../interfaces/Burgers/interface-update-burgers";
import UpdateBurgersEntites from "../entities/Burgers/entites-burgers-update";
import DeleteBurgersDTO from "../dtos/Burgers/dto-delete-burgers";
import CreateBurgersDTO from "../dtos/Burgers/dto-create-burgers";
import CreateBurgersEntities from "../entities/Burgers/entities-burgers-create";
export default class ServiceBurger {
    dataBase: DataBase;
    constructor();
    createService(burger: CreateBurgersDTO): Promise<(CreateBurgersDTO & CreateBurgersEntities) | null>;
    getAllService(): Promise<BurgerEntities[] | null>;
    getByIdService(id: number): Promise<BurgerEntities | null | undefined>;
    updateService(id: number, newBurger: InterfaceUpdateBurgers): Promise<UpdateBurgersEntites | null>;
    excludeService(id: number): Promise<DeleteBurgersDTO | null>;
}
