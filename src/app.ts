import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/stationaryProduct/StationayProduct.route';
import { OrderRoutes } from './app/Order/Order.route';

const app = express();
 
app.use(express.json());
app.use(cors())

app.use('/api/v1/products', ProductRoutes);
app.use('/api/v1/orders', OrderRoutes);

app.get('/', (req: Request, res: Response)=>{
    res.send("Stationary Shop is running")
})

export default app;
