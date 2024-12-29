import DataBase from "../database/DataBase";
import CombosEntities from "../entities/Combos/entities.combo.get";
import CombosUpdateEntities from "../entities/Combos/entities-combo-update";
import InterfaceUpdateCombos from "../interfaces/Combos/interface-update-combos";
import CombosDeleteEntities from "../entities/Combos/entities-combo-delete";
import CreateCombosEntities from "../entities/Combos/entities-combo-create";
import CreateCombosDTO from "../dtos/Combos/dto-create.combos";
export default class ServiceCombos {
    database: DataBase;
    constructor();
    createService(combos: CreateCombosDTO): Promise<(CreateCombosDTO & CreateCombosEntities) | null>;
    getAllService(): Promise<CombosEntities[] | null>;
    getByIdService(id: number): Promise<CombosEntities | null | undefined>;
    updateService(id: number, newCombos: InterfaceUpdateCombos): Promise<CombosUpdateEntities | null>;
    excludeService(id: number): Promise<CombosDeleteEntities | null>;
}
