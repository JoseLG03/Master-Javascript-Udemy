'use strict'

let mongus = require('mongoose');

mongus.Promise = global.Promise;
mongus.connect('mongodb://localhost:27017/portafolio')
      .then(()=>{
          console.log("Conexión exitosa");
      })
      .catch(error=>console.log(error));  