import csvParser from 'csvtojson';
import Product from '../model/productModel';
import process from 'process';

export default class IQRetail {
	constructor() {
	}

	// parse each stock item and convert to a Product
	async parseStockFile(csvFilePath) {
		// parse the IQStockFile to JSON
		const csvJsonArray = await csvParser({ delimiter: '|'}).fromFile(csvFilePath);


		// conform the IQStockFile line to fit the Product Model
		let products = [];

		csvJsonArray.forEach(item => {
			if(item.webItem == 'true') {
				let product = new Product();
				product.fill(item);
				
				products.push(product);
			}
		});
		
		return products;
	}
}
