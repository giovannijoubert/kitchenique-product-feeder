import getProductDataFile from '../action/getProductDataFile';
import getProductPriceFile from '../action/getProductPriceFile';

import { Router } from 'express';

const yuppieRouter = Router();

yuppieRouter.get('/getProductDataFile', (req, res) => getProductDataFile(req, res));
yuppieRouter.get('/getProductPriceFile', (req, res) => getProductPriceFile(req, res));

export default yuppieRouter;