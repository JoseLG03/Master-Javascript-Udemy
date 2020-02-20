'use strict'

let Project = require('../models/project');

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
    },
    saveProject:function(req,res){
        let project = new Project();

        return res.status(200).send({
            message: "Metodo saveProject"
        })
    }
};

module.exports = controller;