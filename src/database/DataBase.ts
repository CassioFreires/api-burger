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
import LoginEntities from "../entities/Users/entities-users-login";
import UserEntities from "../entities/Users/entities-users-get";
import RoleEntities from "../entities/Roles/entities-roles-get";
import PermissionEntities from "../entities/Permissions/entities-permission-get";
import RolePermissionEntities from "../entities/Role_Permission/entities-rolePermission-get";
import CreateUserEntities from "../entities/Users/entities-users-create copy 2";
import UpdateUserEntities from "../entities/Users/entities-users-update";
import DeleteUserEntities from "../entities/Users/entities-users-delete";
import CreateAddressEntities from "../entities/Address/entities-address-create";
import AddressEntities from "../entities/Address/entities-address.get";

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
                CreateDrinksEntities,

                // Users
                LoginEntities,
                UserEntities,
                RoleEntities,
                PermissionEntities,
                RolePermissionEntities,
                CreateUserEntities,
                UpdateUserEntities,
                DeleteUserEntities,

                // Address
                CreateAddressEntities,
                AddressEntities

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

