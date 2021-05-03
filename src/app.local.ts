import express from 'express';
import routes from './routes';

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
	res.send(`<pre>
   |   | | ||   | |       ||       ||  | |  ||       ||  |  | ||   | |       ||  | |  ||       | 
   |   |_| ||   | |_     _||       ||  |_|  ||    ___||   |_| ||   | |   _   ||  | |  ||    ___| 
   |      _||   |   |   |  |       ||       ||   |___ |       ||   | |  | |  ||  |_|  ||   |___  
   |     |_ |   |   |   |  |      _||       ||    ___||  _    ||   | |  |_|  ||       ||    ___| 
   |    _  ||   |   |   |  |     |_ |   _   ||   |___ | | |   ||   | |      | |       ||   |___  
   |___| |_||___|   |___|  |_______||__| |__||_______||_|  |__||___| |____||_||_______||_______| 
   </pre> `);
});


app.listen(3000, () => {
	console.log(`Example app listening at http://localhost:3000`);
});