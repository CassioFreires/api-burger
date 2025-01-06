import BurgerEntities from "../entities/Burgers/entites-burgers";
import InterfaceUpdateBurgers from "../interfaces/Burgers/interface-update-burgers";
import UpdateBurgersEntites from "../entities/Burgers/entites-burgers-update";
import DeleteBurgersDTO from "../dtos/Burgers/dto-delete-burgers";
import CreateBurgersDTO from "../dtos/Burgers/dto-create-burgers";
import CreateBurgersEntities from "../entities/Burgers/entities-burgers-create";
export default class ServiceBurger {
    private dataBase;
    constructor();
    createService(createBurgerDTO: CreateBurgersDTO): Promise<CreateBurgersEntities>;
    getAllService(): Promise<BurgerEntities[]>;
    getByIdService(id: number): Promise<BurgerEntities | null>;
    updateService(id: number, newBurger: InterfaceUpdateBurgers): Promise<UpdateBurgersEntites | null>;
    excludeService(id: number): Promise<DeleteBurgersDTO | null>;
}
