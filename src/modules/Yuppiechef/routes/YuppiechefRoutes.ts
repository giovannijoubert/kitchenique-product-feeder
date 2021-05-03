import getProducts from '../action/getProducts';
import { Router } from 'express';

const yuppieRouter = Router();

yuppieRouter.get('/getProducts', (req, res) => getProducts(req, res));

export default yuppieRouter;