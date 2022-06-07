import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
var app = express();
import {calculate} from './Controllers/operationController.js';


app.use(cors());
app.use(bodyParser.json());
	
app.post('/api/calculate', function (req,res,next){

    if (req.body) {
   		var value = req.body.calcul;
   		value = value.toString().replace(/[^0-9%^*\/()\-+.]/g,''); // keep only 0-9 +-.*/()
			res.send(calculate(value));
    }
});

app.listen(3001, () => {
  console.log('Listening on port 3001')
});


export default app;