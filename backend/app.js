'use strict'

let express= require('express');
let bodyParser = require('body-parser');

let app = express();

//archivos de rutas
let project_routes = require('./routes/project');


//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors


//rutas
app.use('/',project_routes);


//exportar
module.exports = app;