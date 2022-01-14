require('dotenv').config();
const express = require('express');
//const config = require('./app/config/auth.config');

const app = express();
app.use(express.json());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const httpServer = require('http').createServer(app);
let PORT;
process.env.STATUS === 'production'
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);
httpServer.listen(PORT, () => {
  console.log(`Server in ${process.env.STATUS} mode, listening on *:${PORT}`);
});
