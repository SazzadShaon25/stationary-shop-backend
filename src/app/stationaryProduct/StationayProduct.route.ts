import express from 'express'
import { ProductControllers } from './StationaryProduct.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProducts)
router.get('/:productId', ProductControllers.getSignleProduct)
router.put('/:productId', ProductControllers.updateProduct)
router.delete('/:productId', ProductControllers.deleteProduct)

export const ProductRoutes = router;