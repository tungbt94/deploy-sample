import * as express from 'express'
import * as bodyParser from 'body-parser'

import { connection } from './db'
import { addQuote, getAllQuotes } from './qoutes'

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connection();

app.get('/api/hello', async (req, res) => {
  res.send("Hello World!");
});

app.get('/api/quote/list', async (req, res) => {
  getAllQuotes(req, res);
});

app.post('/api/qoute/add', async (req, res) => {
  addQuote(req, res);
});

// app.listen(3000, function () {
//   console.log('listening on port 3000');
// });

var server_port = +process.env.OPENSHIFT_NODEJS_PORT || 3000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || 'localhost'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});