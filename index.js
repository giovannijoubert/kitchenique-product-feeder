const express = require('express');
const app = express();
const port = 3000;

const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());   

var fs = require('fs');
var routePath = './modules/';
fs.readdirSync(routePath).forEach(function(domain) {
	if(domain != '.DS_Store') {
		var route = './modules/' + domain + '/' + domain + 'Routes.js';
		if(fs.existsSync(route))
			require(route)(app);
	}
});

app.get('/', (req, res) => {
	res.send('Hello World, how you doing!');
});

app.post('/', (req, res) => {
	console.log(req.body);
	res.json(req.body);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});