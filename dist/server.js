"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
const DataBase_1 = __importDefault(require("./database/DataBase"));
// Rotas
const routers_burger_1 = __importDefault(require("./routers/routers-burger"));
const routers_promotions_1 = __importDefault(require("./routers/routers.promotions"));
const routers_combos_1 = __importDefault(require("./routers/routers-combos"));
const routers_drinks_1 = __importDefault(require("./routers/routers-drinks"));
const routers_users_1 = __importDefault(require("./routers/routers-users"));
const routers_address_1 = __importDefault(require("./routers/routers-address"));
const routers_orders_1 = __importDefault(require("./routers/routers-orders"));
const cors_1 = __importDefault(require("./config/cors"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
const db = new DataBase_1.default();
// Carrega variáveis de ambiente (.env)
dotenv_1.default.config();
app.use((0, express_session_1.default)({
    secret: process.env.TWILIO_SECRET_KEY || 'Thescience@2',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true }
}));
// Middlewares globais
app.use(cors_1.default); // Middleware CORS configurado em ./config/cors
app.use((0, compression_1.default)()); // Ativa compressão gzip para todas as respostas
app.use(express_1.default.json()); // Permite o uso de JSON no body das requisições
// Rotas da aplicação
app.use('/burger', routers_burger_1.default);
app.use('/promotions', routers_promotions_1.default);
app.use('/combos', routers_combos_1.default);
app.use('/drinks', routers_drinks_1.default);
app.use('/user', routers_users_1.default);
app.use('/address', routers_address_1.default);
app.use('/orders', routers_orders_1.default);
// Inicializa conexão com o banco de dados
db.connect()
    .then(() => {
    console.log("✅ Database initialized successfully");
    // Inicia o servidor na porta definida no .env ou 5000
    app.listen(process.env.PORT || 5000, () => {
        console.log('🚀 Server running on port ' + (process.env.PORT || 5000));
    });
})
    .catch((error) => {
    // Log de erro se falhar a conexão com o banco
    console.error("❌ Error during Data Source initialization", error);
});
//# sourceMappingURL=server.js.map