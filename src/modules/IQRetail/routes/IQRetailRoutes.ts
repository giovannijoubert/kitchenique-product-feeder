import getProducts from '../action/getProducts';
import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/getProducts', (req, res) => getProducts(req, res));

export default productsRouter;