'use strict'

let controller ={
    home: function(req, res){
        return res.status(200).send({
            message: "Hola soy home"
        })
    },
    test: function(req,res){
        return res.status(200).send({
            message:"Soy el metodo o accion test del controlador project"
        })
    }
};

module.exports = controller;