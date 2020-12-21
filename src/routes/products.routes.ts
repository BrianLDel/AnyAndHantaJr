import {Router} from 'express';
import {listProducts, createProduct, modifyProductById, deleteProductById, findProductById} from '../controllers/products/products.controller'
import {verifyToken} from '../middlewares/verifyToken';
import {verifyProductCreate, verifyProductUpdate} from '../middlewares/verifyProductFields'

const router: Router = Router();

router.get('/', listProducts);

router.get('/:productId', findProductById)

router.post('/', [verifyToken, verifyProductCreate], createProduct);

router.put('/:productId', [verifyToken, verifyProductUpdate], modifyProductById);

router.delete('/:productId', verifyToken, deleteProductById);


export default router;