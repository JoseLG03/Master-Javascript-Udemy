'use strict'

let mongus = require('mongoose');
let app = require('./app');
let port = 3700;

mongus.Promise = global.Promise;
mongus.connect('mongodb://localhost:27017/portafolio')
      .then(()=>{
          console.log("Conexión exitosa");
          
          //creación del servidor
          app.listen(port, ()=>{
              console.log("Servidor arriba");
          })
      })
      .catch(error=>console.log(error));  
