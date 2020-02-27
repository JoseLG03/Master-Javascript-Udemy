'use strict'

let express= require('express');
let bodyParser = require('body-parser');
var cors = require('cors');
let app = express();

//archivos de rutas
let project_routes = require('./routes/project');


//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors
// Configurar cabeceras y cors
// configurar cabeceras http
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    next();
});

//rutas
app.use('/', project_routes);


//exportar
module.exports = app;