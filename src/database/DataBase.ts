import { DataSource } from "typeorm";
import BurgerEntities from "../entities/Burgers/entites-burgers";
import UpdateBurgersEntites from "../entities/Burgers/entites-burgers-update";
import CreateBurgersEntities from "../entities/Burgers/entities-burgers-create";

import PromotionsEntities from "../entities/Promotions/entites-promo-get";
import UpdatePromotionsEntites from "../entities/Promotions/entites-promo-update";
import CreatePromotionsEntities from "../entities/Promotions/entities-promo-create";
import DeletePromotionsEntities from "../entities/Promotions/entities-promo-delete";

import CombosEntities from "../entities/Combos/entities.combo.get";
import CombosUpdateEntities from "../entities/Combos/entities-combo-update";
import CombosDeleteEntities from "../entities/Combos/entities-combo-delete";
import CreateCombosEntities from "../entities/Combos/entities-combo-create";
import DrinksEntities from "../entities/Drinks/entites-drinks";
import UpdateDrinksEntites from "../entities/Drinks/entites-drinks-update";
import DeleteDrinksEntities from "../entities/Drinks/entities-drinks-delete";
import CreateDrinksEntities from "../entities/Drinks/entities-drinks-create";

export default class DataBase {
    private conex?: DataSource;

    async connect() {
        this.conex = new DataSource({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: 'root',
            password: "Freires2@",
            database: 'app_burger',
            entities: [
                // hamburgers
                BurgerEntities,
                UpdateBurgersEntites,
                CreateBurgersEntities,
                
                // promotions
                PromotionsEntities,
                UpdatePromotionsEntites,
                CreatePromotionsEntities,
                DeletePromotionsEntities,

                // combos
                CombosEntities,
                CombosUpdateEntities,
                CombosDeleteEntities,
                CreateCombosEntities,

                // drinks
                DrinksEntities,
                UpdateDrinksEntites,
                DeleteDrinksEntities,
                CreateDrinksEntities

            ],
            synchronize: false,
            logging: true
        });

        if (!this.conex.isInitialized) {
            return this.conex.initialize();
        }

        return this.conex;

    }
}

