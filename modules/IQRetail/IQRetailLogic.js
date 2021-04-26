class IQRetail {
	constructor() {
	}

	getLatestStockFile(req, res) {
		const FTPClient = require('../FTPClient');
		let ftp = new FTPClient();
		
		// download the latest stock file
		ftp.download('whlive.csv').then(fileName => {
			// parse each stock item and convert to a Product
			this.parseStockFile(fileName).then(products => {
				res.send(products);
			});
		}); 
	}

	// parse each stock item and convert to a Product
	async parseStockFile(fileName) {
		// parse the IQStockFile to JSON
		const csvParser = require('csvtojson');
		const csvJsonArray = await csvParser({ delimiter: '|'}).fromFile(fileName);

		// conform the IQStockFile line to fit the Product Model
		const Product = require('./ProductModel');
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

module.exports = IQRetail;
