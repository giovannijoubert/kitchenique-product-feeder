module.exports = function(app){
	const IQRetail = require('./IQRetailLogic');

	let iq = new IQRetail();

	app.post('/iq', (req, res) => iq.getLatestStockFile(req, res, 'whlive.csv'));
};