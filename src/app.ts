import express from 'express';
import serverless from 'serverless-http';
import routes from './routes';


const app = express();

app.use(function (req, res, next) {
   console.log(req.query.token);
   if(req.query.token !== process.env.BASIC_API_SECRET) {
      res.json('Unauthorized');
      return;
    }
   next()
});

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

module.exports.handler = serverless(app);