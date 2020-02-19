'use strict'

let express= require('express');
let bodyParser = require('body-parser');

let app = express();

//archivos de rutas



//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors


//rutas
app.get('/',(req, res)=>{
    res.status(200).send("<h3>Inicio</h3>");
});

app.get('/test',(req, res)=>{
    res.status(200).send({message:"Hola mundo desde la api de NodeJS"});
});

//exportar
module.exports = app;