import express from 'express';
import { Response, Request } from 'express';
import OrderController from '../controllers/controller-order';

const orderRouters = express.Router();

const orderController = new OrderController();

orderRouters.post('/create', async (req: Request, res: Response) => {
    return await orderController.create(req, res);
})


export default orderRouters;
