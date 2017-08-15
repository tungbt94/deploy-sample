import * as express from 'express'
import * as bodyParser from 'body-parser'

import { connection } from './db'

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connection();

app.get('/api/hello', async (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});