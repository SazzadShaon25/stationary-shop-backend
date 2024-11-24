import express from 'express';
import { OrderControllers } from './Order.controller';

const router = express.Router();

router.post('/', OrderControllers.createOrder);
router.get('/revenue', OrderControllers.totalRevenue);

export const OrderRoutes = router;