"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DataBase_1 = __importDefault(require("./database/DataBase"));
const routers_burger_1 = __importDefault(require("./routers/routers-burger"));
const routers_promotions_1 = __importDefault(require("./routers/routers.promotions"));
const cors_1 = __importDefault(require("cors"));
const routers_combos_1 = __importDefault(require("./routers/routers-combos"));
const routers_drinks_1 = __importDefault(require("./routers/routers-drinks"));
const db = new DataBase_1.default();
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/burger', routers_burger_1.default);
app.use('/promotions', routers_promotions_1.default);
app.use('/combos', routers_combos_1.default);
app.use('/drinks', routers_drinks_1.default);
db.connect()
    .then(() => {
    console.log("Database initialized successfully");
    app.listen(port || 5000, () => {
        console.log('server running on port ' + port || 5000);
    });
}).catch((error) => {
    console.error("Error during Data Source initialization", error);
});
//# sourceMappingURL=server.js.map