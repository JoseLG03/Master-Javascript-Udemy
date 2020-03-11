'use strict'

let mongus = require('mongoose');
let app = require('./app');
let port = 3700;

mongus.set('useFindAndModify', false);
mongus.Promise = global.Promise;

mongus.connect('mongodb+srv://auratus_03:<auratus_03>@cluster0-azdyr.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true})
      .then(()=>{
          console.log("Conexión exitosa");
          
          //creación del servidor
          app.listen(port, ()=>{
              console.log("Servidor arriba");
          })
      })
      .catch(error=>console.log(error));  
