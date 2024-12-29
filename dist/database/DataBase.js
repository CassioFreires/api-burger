"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const entites_burgers_1 = __importDefault(require("../entities/Burgers/entites-burgers"));
const entites_burgers_update_1 = __importDefault(require("../entities/Burgers/entites-burgers-update"));
const entities_burgers_create_1 = __importDefault(require("../entities/Burgers/entities-burgers-create"));
const entites_promo_get_1 = __importDefault(require("../entities/Promotions/entites-promo-get"));
const entites_promo_update_1 = __importDefault(require("../entities/Promotions/entites-promo-update"));
const entities_promo_create_1 = __importDefault(require("../entities/Promotions/entities-promo-create"));
const entities_promo_delete_1 = __importDefault(require("../entities/Promotions/entities-promo-delete"));
const entities_combo_get_1 = __importDefault(require("../entities/Combos/entities.combo.get"));
const entities_combo_update_1 = __importDefault(require("../entities/Combos/entities-combo-update"));
const entities_combo_delete_1 = __importDefault(require("../entities/Combos/entities-combo-delete"));
const entities_combo_create_1 = __importDefault(require("../entities/Combos/entities-combo-create"));
const entites_drinks_1 = __importDefault(require("../entities/Drinks/entites-drinks"));
const entites_drinks_update_1 = __importDefault(require("../entities/Drinks/entites-drinks-update"));
const entities_drinks_delete_1 = __importDefault(require("../entities/Drinks/entities-drinks-delete"));
const entities_drinks_create_1 = __importDefault(require("../entities/Drinks/entities-drinks-create"));
class DataBase {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.conex = new typeorm_1.DataSource({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: 'root',
                password: "Freires2@",
                database: 'app_burger',
                entities: [
                    // hamburgers
                    entites_burgers_1.default,
                    entites_burgers_update_1.default,
                    entities_burgers_create_1.default,
                    // promotions
                    entites_promo_get_1.default,
                    entites_promo_update_1.default,
                    entities_promo_create_1.default,
                    entities_promo_delete_1.default,
                    // combos
                    entities_combo_get_1.default,
                    entities_combo_update_1.default,
                    entities_combo_delete_1.default,
                    entities_combo_create_1.default,
                    // drinks
                    entites_drinks_1.default,
                    entites_drinks_update_1.default,
                    entities_drinks_delete_1.default,
                    entities_drinks_create_1.default
                ],
                synchronize: false,
                logging: true
            });
            if (!this.conex.isInitialized) {
                return this.conex.initialize();
            }
            return this.conex;
        });
    }
}
exports.default = DataBase;
//# sourceMappingURL=DataBase.js.map