import express from 'express';
import DataBase from './database/DataBase';
import burgerRouter from './routers/routers-burger';
import promotionsRouter from './routers/routers.promotions';
import cors from 'cors';
import combosRouter from './routers/routers-combos';
import drinksRouter from './routers/routers-drinks';
import authRouter from './routers/auth.router';
import env from 'dotenv'

const db = new DataBase();
const app = express();
const port: number = 3000;

env.config();

app.use(cors())
app.use(express.json());


app.use('/burger', burgerRouter);
app.use('/promotions', promotionsRouter);
app.use('/combos', combosRouter);
app.use('/drinks', drinksRouter);
app.use('/auth', authRouter);


db.connect()
    .then(() => {
        console.log("Database initialized successfully")
        app.listen(port || 5000, () => {
            console.log('server running on port ' + port || 5000)
        })
    }).catch((error) => {
        console.error("Error during Data Source initialization", error)
    })




