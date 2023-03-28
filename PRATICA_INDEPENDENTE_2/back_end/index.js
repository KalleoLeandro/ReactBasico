const { Router } = require('express');
const express = require('express');
//const mysql = require('mysql');
//const pool = require('./db/conn');
const port = 3000;
const routes = require('./routes/Routes');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use('/pessoas', routes);

app.listen(port);