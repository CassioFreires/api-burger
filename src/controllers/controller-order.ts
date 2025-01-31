import { Request, Response } from "express";

export default class OrderController {

    async create(req: Request, res:Response) : Promise<any> {
        
        try {
            const {order} = req.body;
            if(!order) return res.status(401).json({message: 'you need to fill in all the fields'});

            return res.status(201).json({message:'Order send successfully', order});
        }catch(error) {
            console.error('Failed to create order', error);
            return res.status(500).json({ message: 'Failed to create order', status: 500 });
        }
    }
}