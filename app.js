const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const userRoutes = require('./user/login');
const allRoutes = require('./all/board');

app.use(bodyParser.urlencoded({extended:false}));

app.use(userRoutes);
app.use(allRoutes);



app.listen(3000);