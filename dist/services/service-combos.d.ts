import CombosEntities from "../entities/Combos/entities.combo.get";
import CombosUpdateEntities from "../entities/Combos/entities-combo-update";
import CombosDeleteEntities from "../entities/Combos/entities-combo-delete";
import CreateCombosEntities from "../entities/Combos/entities-combo-create";
import CreateCombosDTO from "../dtos/Combos/dto-create.combos";
import CombosUpdateDTO from "../dtos/Combos/dto-update-combos";
export default class ServiceCombos {
    private database;
    constructor();
    createService(combos: CreateCombosDTO): Promise<CreateCombosDTO & CreateCombosEntities>;
    getAllService(): Promise<CombosEntities[]>;
    getByIdService(id: number): Promise<CombosEntities | null>;
    updateService(id: number, newCombos: CombosUpdateDTO): Promise<CombosUpdateEntities | null>;
    excludeService(id: number): Promise<CombosDeleteEntities | null>;
}
