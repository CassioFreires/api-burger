import express from 'express';
import compression from 'compression';
import env from 'dotenv';

import DataBase from './database/DataBase';

// Rotas
import burgerRouter from './routers/routers-burger';
import promotionsRouter from './routers/routers.promotions';
import combosRouter from './routers/routers-combos';
import drinksRouter from './routers/routers-drinks';
import usersRouter from './routers/routers-users';
import addressRouter from './routers/routers-address';
import ordersRouter from './routers/routers-orders';

import cors from './config/cors';
import sessio from 'express-session';

const app = express();
const db = new DataBase();

// Carrega variáveis de ambiente (.env)
env.config();

app.use(sessio({
    secret: process.env.TWILIO_SECRET_KEY || 'Thescience@2',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, httpOnly: true}
}))

// Middlewares globais
app.use(cors); // Middleware CORS configurado em ./config/cors
app.use(compression()); // Ativa compressão gzip para todas as respostas
app.use(express.json()); // Permite o uso de JSON no body das requisições

// Rotas da aplicação
app.use('/burger', burgerRouter);
app.use('/promotions', promotionsRouter);
app.use('/combos', combosRouter);
app.use('/drinks', drinksRouter);
app.use('/user', usersRouter);
app.use('/address', addressRouter);
app.use('/orders', ordersRouter);

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
