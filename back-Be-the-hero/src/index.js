const express = require('express')
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* 
BANCO DE DADOS: 

SQL: SQLite

 */

app.listen(3333);