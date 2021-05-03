import getProducts from '../action/getProducts';
import { Router } from 'express';

const iqRouter = Router();

iqRouter.get('/getProducts', (req, res) => getProducts(req, res));

export default iqRouter;